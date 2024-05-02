import { Sound } from "../types/Sound";

export interface ITimerConfig {
  id: number;
  sound: Sound;
  time: number;
  title: string;
}
