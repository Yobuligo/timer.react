import { Sound } from "../../types/Sound";

export interface ISoundSelectorProps {
  initialSound: Sound;
  isRunning: boolean;
  onSelect: (sound: Sound) => void;
}
