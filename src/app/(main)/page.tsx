"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { convert, Params, SoundEffect } from "@/lib/sfxr/sfxr";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@/components/ui/button";
import { ParamSection } from "@/components/param-section";
import { ParamToggleGroup } from "@/components/param-toggle-group";
import { Slider } from "@/components/ui/slider";
import { Oscilloscope } from "@/components/oscilloscope";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Link } from "lucide-react";
import { Label } from "@/components/ui/label";
import { UI_GENERATOR_CONFIG } from "@/lib/ui/ui.const";

export default function Home() {
  // State for the current sound parameters.
  const [params, setParams] = useState<Params>(new Params());
  // File name cannot be directly derived from params, so we use a separate state.
  const [fileName, setFileName] = useState<string>("sfx.wav");

  // Derived values.
  const b58 = useMemo(() => params.toB58(), [params]);
  const sound = useMemo(() => new SoundEffect(params).generate(), [params]);
  const audio = useMemo(() => sound.getAudio(), [sound]);
  const analyser = useMemo(() => audio.analyser, [sound]);

  const fileSize = useMemo(
    () => Math.round(sound.wav.length / 1024) + "kB",
    [sound]
  );
  const numSamples = useMemo(
    () =>
      (
        sound.header.subChunk2Size /
        (sound.header.bitsPerSample >> 3)
      ).toString(),
    [sound]
  );
  const clipping = sound.clipping;

  // We only want to play the sound when the audio buffer is updated.
  // By reacting to the audio buffer, we can assure that the analyser node is also updated.
  useEffect(() => {
    debouncedPlay();
  }, [audio]);

  const play = useCallback(() => {
    audio.play();
  }, [sound]);

  // Debounced play to be used for example with sliders.
  const debouncedPlay = useDebouncedCallback(play, 300, { leading: true });

  const updateParam = <K extends keyof Params>(key: K, value: Params[K]) => {
    const newParams = params.clone();
    newParams[key] = value;
    setParams(newParams);
  };

  // Generate a new sound.
  const gen = (fx: string, shouldPlay: boolean = true) => {
    const newParams = params.clone();

    if (fx.startsWith("#")) {
      newParams.fromB58(fx.slice(1));

      // Download name becomes "random.wav"
      setFileName("random.wav");
    } else {
      // @ts-ignore
      if (typeof newParams[fx] === "function") {
        // @ts-ignore
        newParams[fx]();

        // Download name becomes fx+".wav"
        setFileName(fx + ".wav");
      }
    }
    setParams(newParams);
    // shouldPlay && play();
  };

  // Mutate (slightly change) current parameters.
  const mut = () => {
    const newp = params.clone();
    newp.mutate();
    setParams(newp);
  };

  // Copy b58 code to clipboard.
  const copy = () => {
    navigator.clipboard.writeText(b58);
  };

  // On mount, generate a default sound.
  useEffect(() => {
    const hash = window.location.hash || "pickupCoin";

    gen(hash, false); // False = Don't play on mount
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Synthesizer</h1>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Main app */}
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] gap-6">
        {/* Generator Section */}
        <div className="space-y-2 bg-card text-card-foreground p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Generator</h2>
          <div className="space-y-2">
            {UI_GENERATOR_CONFIG.map((config) => (
              <Button
                key={config.key}
                onClick={() => gen(config.key)}
                className="w-full"
              >
                {config.label}
              </Button>
            ))}

            <div className="space-y-2 pt-4">
              <Button className="w-full" variant="outline" onClick={mut}>
                Mutate
              </Button>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => play()}
              >
                Play
              </Button>
            </div>
          </div>
        </div>

        {/* Manual Settings Section */}
        <div className="space-y-6 bg-card text-card-foreground p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Manual Settings</h2>

          <div className="space-y-4">
            <ParamToggleGroup
              options={["0", "1", "2", "3"]}
              labels={["Square", "Sawtooth", "Sine", "Noise"]}
              onChange={(value) => {
                updateParam("wave_type", +value);
              }}
              value={params.wave_type.toString()}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ParamSection
              title="Envelope"
              uiParamsPrefix="p_env"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Frequency"
              uiParamsPrefix="p_freq"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Vibrato"
              uiParamsPrefix="p_vib"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Arpeggiation"
              uiParamsPrefix="p_arp"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Duty"
              uiParamsPrefix="p_duty"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Retrigger"
              uiParamsPrefix="p_repeat"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Flanger"
              uiParamsPrefix="p_pha"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="Low-Pass Filter"
              uiParamsPrefix="p_lpf"
              params={params}
              updateParam={updateParam}
            />
            <ParamSection
              title="High-Pass Filter"
              uiParamsPrefix="p_hpf"
              params={params}
              updateParam={updateParam}
            />
          </div>
        </div>

        {/* Export Section */}
        <div className="space-y-6 bg-card text-card-foreground p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Sound</h2>

          {/* <Button variant="default" className="w-full">
            Play
          </Button> */}

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label className="text-sm">Gain</Label>
                <span className="text-sm text-muted-foreground">
                  {convert.units["sound_vol"](params.sound_vol)}
                </span>
              </div>

              <Slider
                min={0}
                max={1}
                step={0.001}
                value={[params.sound_vol ? params.sound_vol : 0]}
                onValueChange={(e) => {
                  updateParam("sound_vol", e[0]);
                }}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Sample Rate (Hz)</Label>

              <ParamToggleGroup
                options={["44100", "22050", "11025", "5512"]}
                labels={["44k", "22k", "11k", "6k"]}
                onChange={(value) => {
                  updateParam("sample_rate", +value);
                }}
                value={params.sample_rate.toString()}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Sample Rate (Hz)</Label>

              <ParamToggleGroup
                options={["16", "8"]}
                labels={["16 bit", "8 bit"]}
                onChange={(value) => {
                  updateParam("sample_size", +value);
                }}
                value={params.sample_size.toString()}
              ></ParamToggleGroup>
            </div>

            <div className="space-y-2 pt-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                {/* <div>File name:</div>
                <a id="wav" href={sound?.dataURI || "#"} download={fileName}>
                  {fileName}
                </a> */}

                <div>Duration:</div>
                <div> {(+numSamples / params.sample_rate).toFixed(2)}s</div>
                <div>File size:</div>
                <div>{fileSize}</div>
                <div>Samples:</div>
                <div>{numSamples}</div>
                <div>Clipped:</div>
                <div>{clipping}</div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <Button className="w-full">
                <a id="wav" href={sound?.dataURI || "#"} download={fileName}>
                  Download
                </a>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span>Waveform</span>
              {analyser && <Oscilloscope analyser={analyser} />}
            </div>
          </div>
        </div>

        {/* Serialize/Deserialize Section */}
        {/* <div className="flex flex-col gap-2">
          <h2 className="font-bold text-lg">Share</h2>
          <div>
            <Button>
              <a
                className="flex items-center gap-2"
                id="share"
                href={"#" + b58}
              >
                <Link /> Copy permalink
              </a>
            </Button>
          </div>
          <div>
            <Button onClick={copy}>Copy code</Button>
          </div>
          <Button
            onClick={() => {
             
            }}
          >
            ▼ Export config
          </Button>
          <Button
            onClick={() => {
            }}
          >
            ▲ Import config
          </Button>
          <Button
            onClick={() => {
            }}
          >
            Download config
          </Button>
        </div> */}
      </div>
    </main>
  );
}
