/**
 * Ambient Sound Generator using Web Audio API
 * Generates an organic, subtle rainfall & distant tape hiss texture
 * No external audio files needed - runs natively in browser.
 */

class RainAmbience {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.gainNode = null;
    this.noiseNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    // Master gain
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.04, this.ctx.currentTime); // very quiet, gentle background
    this.gainNode.connect(this.ctx.destination);
  }

  start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate brown/pink noise (soft rain texture)
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Gain compensation
    }

    this.noiseNode = this.ctx.createBufferSource();
    this.noiseNode.buffer = buffer;
    this.noiseNode.loop = true;

    // Filter to simulate soft raindrops outside window
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(650, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    this.noiseNode.connect(filter);
    filter.connect(this.gainNode);

    this.noiseNode.start();
    this.isPlaying = true;
  }

  stop() {
    if (this.noiseNode) {
      try {
        this.noiseNode.stop();
        this.noiseNode.disconnect();
      } catch {
        // ignore
      }
      this.noiseNode = null;
    }
    this.isPlaying = false;
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }
}

export const rainAmbience = new RainAmbience();
