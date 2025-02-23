"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Params, SoundEffect } from "@/lib/sfxr/sfxr";
import { Button } from "./ui/button";
import { useDebouncedCallback } from "use-debounce";

// Assume external libraries (riffwave.js, sfxr.js) are loaded globally,
// so that the globals Params and SoundEffect exist.
const SOUND_VOL = 0.25;
const SAMPLE_RATE = 44100;
const SAMPLE_SIZE = 8;

export function SoundGenerator() {
  // Keep params and sound in state.
  const [params, setParams] = useState<Params>(new Params());
  const b58 = useMemo(() => params.toB58(), [params]);
  const sound = useMemo(() => new SoundEffect(params).generate(), [params]);
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

  const play = (p: Params, noregen?: boolean) => {
    if (!noregen) {
      // Optionally update location.hash if desired.
      const newSound = new SoundEffect(p).generate();
      newSound.getAudio().play();
    } else {
      sound?.getAudio().play();
    }
  };

  // To be used for example with sliders.
  const debouncedPlay = useDebouncedCallback(play, 300, { leading: true });

  const updateParam = <K extends keyof Params>(
    key: K,
    value: Params[K],
    shouldPlay: boolean = true
  ) => {
    const newParams = params.clone();
    newParams[key] = value;
    updateUi(newParams);
    debouncedPlay(newParams);
    setParams(newParams);
  };

  // Update UI state based on params.
  const updateUi = (p: any) => {
    // In a React app the UI is automatically synced to state.
    // If any additional processing is needed (for example slider conversion), do it here.
    // (Left empty as original conversion functions are not ported.)
  };

  // Play sound and update stats.
  /*
    The noregen flag acts as a "no regeneration" switch. 
    When set to true, it tells the play function not to generate a new sound, but rather to use the existing one. 
    This allows you to simply play the current sound without recalculating or updating it.
  */

  // Generate a new sound.
  const gen = (fx: string, shouldPlay: boolean = true) => {
    const newParams = params.clone();
    // newParams.sound_vol = SOUND_VOL;
    // newParams.sample_rate = SAMPLE_RATE;
    // newParams.sample_size = SAMPLE_SIZE;
    if (fx.startsWith("#")) {
      newParams.fromB58(fx.slice(1));
      // Download name becomes "random.wav"
    } else {
      // @ts-ignore
      if (typeof newParams[fx] === "function") {
        // @ts-ignore
        newParams[fx]();
      }
      // Download name becomes fx+".wav"
    }
    setParams(newParams);
    updateUi(newParams);
    shouldPlay && play(newParams);
  };

  // Mutate current parameters.
  const mut = () => {
    const newp = params.clone();
    newp.mutate();
    setParams(newp);
    updateUi(newp);
    play(newp);
  };

  // Copy b58 code to clipboard.
  const copy = () => {
    navigator.clipboard.writeText(b58);
  };

  // On mount, generate a default sound.
  useEffect(() => {
    const hash = window.location.hash.substring(1) || "pickupCoin";
    gen(hash, false); // Don't play on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex gap-4">
      {/* Generator Section */}
      <div className="flex flex-col gap-2">
        <h2>Generator</h2>
        <Button onClick={() => gen("random")}>Random</Button>
        <Button onClick={() => gen("pickupCoin")}>Pickup/coin</Button>
        <Button onClick={() => gen("laserShoot")}>Laser/shoot</Button>
        <Button onClick={() => gen("explosion")}>Explosion</Button>
        <Button onClick={() => gen("powerUp")}>Powerup</Button>
        <Button onClick={() => gen("hitHurt")}>Hit/hurt</Button>
        <Button onClick={() => gen("jump")}>Jump</Button>
        <Button onClick={() => gen("click")}>Click</Button>
        <Button onClick={() => gen("blipSelect")}>Blip/select</Button>
        <Button onClick={() => gen("synth")}>Synth</Button>
        <Button onClick={() => gen("tone")}>Tone</Button>
        <Button onClick={mut}>Mutate</Button>
        <Button onClick={() => play(params, true)}>Play</Button>
      </div>

      {/* Manual Settings Section */}
      <div className="flex flex-col gap-2">
        <h2>Manual Settings</h2>

        <div className="flex gap-2">
          <input
            type="radio"
            id="square"
            name="shape"
            value="0"
            checked={params.wave_type === 0}
            onChange={() => {
              updateParam("wave_type", 0);
            }}
          />
          <label htmlFor="square">Square</label>
          <input
            type="radio"
            id="sawtooth"
            name="shape"
            value="1"
            checked={params.wave_type === 1}
            onChange={() => {
              updateParam("wave_type", 1);
            }}
          />
          <label htmlFor="sawtooth">Sawtooth</label>
          <input
            type="radio"
            id="sine"
            name="shape"
            value="2"
            checked={params.wave_type === 2}
            onChange={() => {
              updateParam("wave_type", 2);
            }}
          />
          <label htmlFor="sine">Sine</label>
          <input
            type="radio"
            id="noise"
            name="shape"
            value="3"
            checked={params.wave_type === 3}
            onChange={() => {
              updateParam("wave_type", 3);
            }}
          />
          <label htmlFor="noise">Noise</label>
        </div>

        {/* Example slider: Attack time */}
        <table>
          <tbody>
            <tr>
              <th colSpan={2}>Envelope</th>
            </tr>
            <tr>
              <td>
                <input
                  type="range"
                  id="p_env_attack"
                  min={0}
                  max={1000}
                  value={params.p_env_attack ? params.p_env_attack * 1000 : 0}
                  onChange={(e) => {
                    updateParam(
                      "p_env_attack",
                      parseFloat(e.target.value) / 1000
                    );
                  }}
                />
              </td>
              <th>Attack time</th>
            </tr>
            <tr>
              <td>
                <input
                  type="range"
                  id="p_env_sustain"
                  min={0}
                  max={1000}
                  value={params.p_env_sustain ? params.p_env_sustain * 1000 : 0}
                  onChange={(e) => {
                    updateParam(
                      "p_env_sustain",
                      parseFloat(e.target.value) / 1000
                    );
                  }}
                />
              </td>
              <th>Sustain time</th>
            </tr>
            {/* Additional sliders would follow a similar pattern. */}
            {/* For any complex conversion (e.g. using custom convert functions), leave a comment */}
          </tbody>
        </table>
      </div>

      {/* Export Section */}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h2>Sound</h2>
          <Button onClick={() => play(params, true)}>Play</Button>
        </div>

        <div id="soundexport">
          Download:
          <a id="wav" href={sound?.dataURI || "#"} download={b58 + ".wav"}>
            sfx.wav
          </a>
          <table id="stats" style={{ margin: "auto" }}>
            <tbody>
              <tr>
                <th>File size:</th>
                <td>{fileSize}</td>
              </tr>
              <tr>
                <th>Samples:</th>
                <td>{numSamples}</td>
              </tr>
              <tr>
                <th>Clipped:</th>
                <td>{clipping}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          Gain <label htmlFor="sound_vol"></label>
          <input
            type="range"
            id="sound_vol"
            min={0}
            max={1000}
            value={params.sound_vol ? params.sound_vol * 1000 : 0}
            onChange={(e) => {
              updateParam("sound_vol", parseFloat(e.target.value) / 1000);
            }}
          />
          Sample Rate (Hz)
          <div id="hz">
            <input
              type="radio"
              id="44100"
              name="hz"
              value="44100"
              checked={params.sample_rate === 44100}
              onChange={() => {
                updateParam("sample_rate", 44100);
              }}
            />
            <label htmlFor="44100">44k</label>
            <input
              type="radio"
              id="22050"
              name="hz"
              value="22050"
              checked={params.sample_rate === 22050}
              onChange={() => {
                updateParam("sample_rate", 22050);
              }}
            />
            <label htmlFor="22050">22k</label>
            <input
              type="radio"
              id="11025"
              name="hz"
              value="11025"
              checked={params.sample_rate === 11025}
              onChange={() => {
                updateParam("sample_rate", 11025);
              }}
            />
            <label htmlFor="11025">11k</label>
            <input
              type="radio"
              id="5512"
              name="hz"
              value="5512"
              checked={params.sample_rate === 5512}
              onChange={() => {
                updateParam("sample_rate", 5512);
              }}
            />
            <label htmlFor="5512">6k</label>
          </div>
          Sample size
          <div id="bits">
            <input
              type="radio"
              id="16"
              name="bits"
              value="16"
              checked={params.sample_size === 16}
              onChange={() => {
                updateParam("sample_size", 16);
              }}
            />
            <label htmlFor="16">16 bit</label>
            <input
              type="radio"
              id="8"
              name="bits"
              value="8"
              checked={params.sample_size === 8}
              onChange={() => {
                updateParam("sample_size", 8);
              }}
            />
            <label htmlFor="8">8 bit</label>
          </div>
        </div>

        <div>
          <a id="share" href={"#" + b58}>
            🔗 permalink
          </a>
        </div>
        <div>
          <Button onClick={copy}>Copy code</Button>
        </div>
      </div>

      {/* Serialize/Deserialize Section */}
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => {
            // Serialization UI not fully implemented.
            // e.g. Show a textarea with JSON.stringify(params, null, 2)
          }}
        >
          ▼ Serialize
        </Button>
        <Button
          onClick={() => {
            // Deserialization UI not implemented.
          }}
        >
          ▲ Deserialize
        </Button>
      </div>
    </div>
  );
}
