import { ReactNode } from "react";
import { Sound } from "../../../types/Sound";

export interface ITimerItemCardProps {
  children: ReactNode;
  isRunning: boolean;
  sound: Sound;
}
