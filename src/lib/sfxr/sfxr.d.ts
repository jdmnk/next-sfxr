export namespace sfxr {
  function toBuffer(synthdef: any): number[];
  function toWebAudio(synthdef: any, audiocontext: any): any;
  function toWave(synthdef: any): any;
  function toAudio(synthdef: any): any;
  function play(synthdef: any): any;
  function b58decode(b58encoded: any): {};
  function b58encode(synthdef: any): string;
  function generate(algorithm: any, options: any): any;
}
declare namespace sliders {
  function p_env_attack(v: any): number;
  function p_env_sustain(v: any): number;
  function p_env_punch(v: any): any;
  function p_env_decay(v: any): number;
  function p_base_freq(v: any): number;
  function p_freq_limit(v: any): number;
  function p_freq_ramp(v: any): number;
  function p_freq_dramp(v: any): number;
  function p_vib_speed(v: any): number;
  function p_vib_strength(v: any): number;
  function p_arp_mod(v: any): number;
  function p_arp_speed(v: any): number;
  function p_duty(v: any): number;
  function p_duty_ramp(v: any): number;
  function p_repeat_speed(v: any): number;
  function p_pha_offset(v: any): number;
  function p_pha_ramp(v: any): number;
  function p_lpf_freq(v: any): number;
  function p_lpf_ramp(v: any): number;
  function p_lpf_resonance(v: any): number;
  function p_hpf_freq(v: any): number;
  function p_hpf_ramp(v: any): number;
  function sound_vol(v: any): number;
}
declare namespace domain {
  export function p_env_attack_1(v: any): number;
  export { p_env_attack_1 as p_env_attack };
  export function p_env_sustain_1(v: any): number;
  export { p_env_sustain_1 as p_env_sustain };
  export function p_env_punch_1(v: any): number;
  export { p_env_punch_1 as p_env_punch };
  export function p_env_decay_1(v: any): number;
  export { p_env_decay_1 as p_env_decay };
  export function p_base_freq_1(v: any): any;
  export { p_base_freq_1 as p_base_freq };
  export function p_freq_limit_1(v: any): any;
  export { p_freq_limit_1 as p_freq_limit };
  export function p_freq_ramp_1(v: any): number;
  export { p_freq_ramp_1 as p_freq_ramp };
  export function p_freq_dramp_1(v: any): number;
  export { p_freq_dramp_1 as p_freq_dramp };
  export function p_vib_speed_1(v: any): number;
  export { p_vib_speed_1 as p_vib_speed };
  export function p_vib_strength_1(v: any): number;
  export { p_vib_strength_1 as p_vib_strength };
  export function p_arp_mod_1(v: any): number;
  export { p_arp_mod_1 as p_arp_mod };
  export function p_arp_speed_1(v: any): number;
  export { p_arp_speed_1 as p_arp_speed };
  export function p_duty_1(v: any): number;
  export { p_duty_1 as p_duty };
  export function p_duty_ramp_1(v: any): number;
  export { p_duty_ramp_1 as p_duty_ramp };
  export function p_repeat_speed_1(v: any): number;
  export { p_repeat_speed_1 as p_repeat_speed };
  export function p_pha_offset_1(v: any): number;
  export { p_pha_offset_1 as p_pha_offset };
  export function p_pha_ramp_1(v: any): number;
  export { p_pha_ramp_1 as p_pha_ramp };
  export function p_lpf_freq_1(v: any): number;
  export { p_lpf_freq_1 as p_lpf_freq };
  export function p_lpf_ramp_1(v: any): number;
  export { p_lpf_ramp_1 as p_lpf_ramp };
  export function p_lpf_resonance_1(v: any): number;
  export { p_lpf_resonance_1 as p_lpf_resonance };
  export function p_hpf_freq_1(v: any): number;
  export { p_hpf_freq_1 as p_hpf_freq };
  export function p_hpf_ramp_1(v: any): number;
  export { p_hpf_ramp_1 as p_hpf_ramp };
  export function sound_vol_1(v: any): number;
  export { sound_vol_1 as sound_vol };
}
declare namespace sliders_inverse {
  export function p_env_attack_2(v: any): number;
  export { p_env_attack_2 as p_env_attack };
  export function p_env_sustain_2(v: any): number;
  export { p_env_sustain_2 as p_env_sustain };
  export function p_env_punch_2(v: any): any;
  export { p_env_punch_2 as p_env_punch };
  export function p_env_decay_2(v: any): number;
  export { p_env_decay_2 as p_env_decay };
  export function p_base_freq_2(v: any): number;
  export { p_base_freq_2 as p_base_freq };
  export function p_freq_limit_2(v: any): number;
  export { p_freq_limit_2 as p_freq_limit };
  export function p_freq_ramp_2(v: any): number;
  export { p_freq_ramp_2 as p_freq_ramp };
  export function p_freq_dramp_2(v: any): number;
  export { p_freq_dramp_2 as p_freq_dramp };
  export function p_vib_speed_2(v: any): number;
  export { p_vib_speed_2 as p_vib_speed };
  export function p_vib_strength_2(v: any): number;
  export { p_vib_strength_2 as p_vib_strength };
  export function p_arp_mod_2(v: any): number;
  export { p_arp_mod_2 as p_arp_mod };
  export function p_arp_speed_2(v: any): number;
  export { p_arp_speed_2 as p_arp_speed };
  export function p_duty_2(v: any): number;
  export { p_duty_2 as p_duty };
  export function p_duty_ramp_2(v: any): number;
  export { p_duty_ramp_2 as p_duty_ramp };
  export function p_repeat_speed_2(v: any): number;
  export { p_repeat_speed_2 as p_repeat_speed };
  export function p_pha_offset_2(v: any): number;
  export { p_pha_offset_2 as p_pha_offset };
  export function p_pha_ramp_2(v: any): number;
  export { p_pha_ramp_2 as p_pha_ramp };
  export function p_lpf_freq_2(v: any): number;
  export { p_lpf_freq_2 as p_lpf_freq };
  export function p_lpf_ramp_2(v: any): number;
  export { p_lpf_ramp_2 as p_lpf_ramp };
  export function p_lpf_resonance_2(v: any): number;
  export { p_lpf_resonance_2 as p_lpf_resonance };
  export function p_hpf_freq_2(v: any): number;
  export { p_hpf_freq_2 as p_hpf_freq };
  export function p_hpf_ramp_2(v: any): number;
  export { p_hpf_ramp_2 as p_hpf_ramp };
  export function sound_vol_2(v: any): number;
  export { sound_vol_2 as sound_vol };
}
declare namespace domain_inverse {
  export function p_env_attack_3(v: any): number;
  export { p_env_attack_3 as p_env_attack };
  export function p_env_sustain_3(v: any): number;
  export { p_env_sustain_3 as p_env_sustain };
  export function p_env_punch_3(v: any): number;
  export { p_env_punch_3 as p_env_punch };
  export function p_env_decay_3(v: any): number;
  export { p_env_decay_3 as p_env_decay };
  export function p_base_freq_3(v: any): any;
  export { p_base_freq_3 as p_base_freq };
  export function p_freq_limit_3(v: any): any;
  export { p_freq_limit_3 as p_freq_limit };
  export function p_freq_ramp_3(v: any): number;
  export { p_freq_ramp_3 as p_freq_ramp };
  export function p_freq_dramp_3(v: any): number;
  export { p_freq_dramp_3 as p_freq_dramp };
  export function p_vib_speed_3(v: any): number;
  export { p_vib_speed_3 as p_vib_speed };
  export function p_vib_strength_3(v: any): number;
  export { p_vib_strength_3 as p_vib_strength };
  export function p_arp_mod_3(v: any): number;
  export { p_arp_mod_3 as p_arp_mod };
  export function p_arp_speed_3(v: any): number;
  export { p_arp_speed_3 as p_arp_speed };
  export function p_duty_3(v: any): number;
  export { p_duty_3 as p_duty };
  export function p_duty_ramp_3(v: any): number;
  export { p_duty_ramp_3 as p_duty_ramp };
  export function p_repeat_speed_3(v: any): number;
  export { p_repeat_speed_3 as p_repeat_speed };
  export function p_pha_offset_3(v: any): number;
  export { p_pha_offset_3 as p_pha_offset };
  export function p_pha_ramp_3(v: any): number;
  export { p_pha_ramp_3 as p_pha_ramp };
  export function p_lpf_freq_3(v: any): number;
  export { p_lpf_freq_3 as p_lpf_freq };
  export function p_lpf_ramp_3(v: any): number;
  export { p_lpf_ramp_3 as p_lpf_ramp };
  export function p_lpf_resonance_3(v: any): number;
  export { p_lpf_resonance_3 as p_lpf_resonance };
  export function p_hpf_freq_3(v: any): number;
  export { p_hpf_freq_3 as p_hpf_freq };
  export function p_hpf_ramp_3(v: any): number;
  export { p_hpf_ramp_3 as p_hpf_ramp };
  export function sound_vol_3(v: any): number;
  export { sound_vol_3 as sound_vol };
}
declare namespace units {
  export function p_env_attack_4(v: any): string;
  export { p_env_attack_4 as p_env_attack };
  export function p_env_sustain_4(v: any): string;
  export { p_env_sustain_4 as p_env_sustain };
  export function p_env_punch_4(v: any): string;
  export { p_env_punch_4 as p_env_punch };
  export function p_env_decay_4(v: any): string;
  export { p_env_decay_4 as p_env_decay };
  export function p_base_freq_4(v: any): string;
  export { p_base_freq_4 as p_base_freq };
  export function p_freq_limit_4(v: any): string;
  export { p_freq_limit_4 as p_freq_limit };
  export function p_freq_ramp_4(v: any): string;
  export { p_freq_ramp_4 as p_freq_ramp };
  export function p_freq_dramp_4(v: any): string;
  export { p_freq_dramp_4 as p_freq_dramp };
  export function p_vib_speed_4(v: any): string;
  export { p_vib_speed_4 as p_vib_speed };
  export function p_vib_strength_4(v: any): string;
  export { p_vib_strength_4 as p_vib_strength };
  export function p_arp_mod_4(v: any): string;
  export { p_arp_mod_4 as p_arp_mod };
  export function p_arp_speed_4(v: any): string;
  export { p_arp_speed_4 as p_arp_speed };
  export function p_duty_4(v: any): string;
  export { p_duty_4 as p_duty };
  export function p_duty_ramp_4(v: any): string;
  export { p_duty_ramp_4 as p_duty_ramp };
  export function p_repeat_speed_4(v: any): string;
  export { p_repeat_speed_4 as p_repeat_speed };
  export function p_pha_offset_4(v: any): string;
  export { p_pha_offset_4 as p_pha_offset };
  export function p_pha_ramp_4(v: any): string;
  export { p_pha_ramp_4 as p_pha_ramp };
  export function p_lpf_freq_4(v: any): string;
  export { p_lpf_freq_4 as p_lpf_freq };
  export function p_lpf_ramp_4(v: any): string;
  export { p_lpf_ramp_4 as p_lpf_ramp };
  export function p_lpf_resonance_4(v: any): string;
  export { p_lpf_resonance_4 as p_lpf_resonance };
  export function p_hpf_freq_4(v: any): string;
  export { p_hpf_freq_4 as p_hpf_freq };
  export function p_hpf_ramp_4(v: any): string;
  export { p_hpf_ramp_4 as p_hpf_ramp };
  export function sound_vol_4(v: any): string;
  export { sound_vol_4 as sound_vol };
}
declare var params_order: string[];
declare var params_signed: string[];
/*** Core data structure ***/
export function Params(): void;
export class Params {
  oldParams: boolean;
  wave_type: number;
  p_env_attack: number;
  p_env_sustain: number;
  p_env_punch: number;
  p_env_decay: number;
  p_base_freq: number;
  p_freq_limit: number;
  p_freq_ramp: number;
  p_freq_dramp: number;
  p_vib_strength: number;
  p_vib_speed: number;
  p_arp_mod: number;
  p_arp_speed: number;
  p_duty: number;
  p_duty_ramp: number;
  p_repeat_speed: number;
  p_pha_offset: number;
  p_pha_ramp: number;
  p_lpf_freq: number;
  p_lpf_ramp: number;
  p_lpf_resonance: number;
  p_hpf_freq: number;
  p_hpf_ramp: number;
  sound_vol: number;
  sample_rate: number;
  sample_size: number;
  toB58(): string;
  fromB58(b58encoded: any): this;
  fromJSON(struct: any): this;
  /*** Presets ***/
  pickupCoin(): this;
  laserShoot(): this;
  explosion(): this;
  powerUp(): this;
  hitHurt(): this;
  jump(): this;
  blipSelect(): this;
  synth(): this;
  tone(): this;
  click(): this;
  random(): this;
  mutate(): this;
  clone(): this;
}
/*** Main entry point ***/
export function SoundEffect(ps: any): void;
export class SoundEffect {
  /*** Main entry point ***/
  constructor(ps: any);
  init(ps: any): void;
  parameters: any;
  waveShape: number;
  fltw: number;
  enableLowPassFilter: boolean;
  fltw_d: number;
  fltdmp: number;
  flthp: number;
  flthp_d: number;
  vibratoSpeed: number;
  vibratoAmplitude: number;
  envelopeLength: number[];
  envelopePunch: any;
  flangerOffset: any;
  flangerOffsetSlide: any;
  repeatTime: number;
  gain: number;
  sampleRate: any;
  bitsPerChannel: any;
  initForRepeat(): void;
  elapsedSinceRepeat: number;
  period: number;
  periodMax: number;
  enableFrequencyCutoff: boolean;
  periodMult: number;
  periodMultSlide: number;
  dutyCycle: number;
  dutyCycleSlide: number;
  arpeggioMultiplier: number;
  arpeggioTime: number;
  getRawBuffer(): {
    buffer: number[];
    normalized: number[];
    clipped: number;
  };
  generate(): any;
}
declare var SQUARE: number;
declare var SAWTOOTH: number;
declare var SINE: number;
declare var NOISE: number;
declare var TRIANGLE: number;
export declare namespace convert {
  export { sliders };
  export { domain };
  export { sliders_inverse };
  export { domain_inverse };
  export { units };
}
export declare namespace parameters {
  export { params_order as order };
  export { params_signed as signed };
}
export declare namespace waveforms {
  export { SQUARE };
  export { SAWTOOTH };
  export { SINE };
  export { NOISE };
  export { TRIANGLE };
}
export {};
