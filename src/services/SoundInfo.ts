import { Sound } from "../types/Sound";

class SoundInfoDefault {
  getPath(sound: Sound): string {
    switch (sound) {
      case Sound.SingleGong:
        return "/assets/single_gong.mp3";
      case Sound.DoubleGong:
        return "/assets/double_gong.mp3";
      case Sound.TripleGong:
        return "/assets/triple_gong.mp3";
    }
  }
}

export const SoundInfo = new SoundInfoDefault();
