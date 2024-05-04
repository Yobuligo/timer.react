import { Sound } from "../../types/Sound";

export interface ISoundSelectorProps {
  initialSound: Sound;
  onSelect: (sound: Sound) => void;
}
