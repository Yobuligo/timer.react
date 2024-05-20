import { CSSProperties } from "react";
import { NotSupportedError } from "../core/errors/NotSupportedError";
import { Sound } from "../types/Sound";

class StyleFactoryDefault {
  createByProps(sound: Sound, isRunning: boolean): CSSProperties {
    if (isRunning) {
      return {
        border: "#b16392",
        backgroundColor: "#b16392",
      };
    }

    switch (sound) {
      case Sound.SingleGong: {
        return {
          border: "#6660af",
          backgroundColor: "#6660af",
        };
      }
      case Sound.DoubleGong: {
        return {
          border: "#63A2B1",
          backgroundColor: "#63A2B1",
        };
      }
      case Sound.TripleGong: {
        return {
          border: "#6B6B6B",
          backgroundColor: "#6B6B6B",
        };
      }
      default:
        throw new NotSupportedError();
    }
  }
}

export const StyleFactory = new StyleFactoryDefault();
