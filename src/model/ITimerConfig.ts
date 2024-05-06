import { Sound } from "../types/Sound";

export interface ITimerConfig {
  duration: number;
  editMode: boolean;
  id: string;
  sound: Sound;
  title: string;
}
