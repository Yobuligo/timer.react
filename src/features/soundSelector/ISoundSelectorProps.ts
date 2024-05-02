import { Sound } from "../../types/Sound";

export interface ISoundSelectorProps {
  onSelect: (sound: Sound) => void;
}
