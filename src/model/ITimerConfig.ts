import { Sound } from "../types/Sound";

export interface ITimerConfig {
  id: string;
  sound: Sound;
  time: number;
  title: string;
}
