import { Sound } from "../types/Sound";

export interface ITimerConfig {
  duration: number;
  id: string;
  sound: Sound;
  title: string;
}
