import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemDisplayProps {
  isRunning: boolean;
  onEdit: () => void;
  onPlay: (timerConfig: ITimerConfig) => void;
  runtime: number;
  timerConfig: ITimerConfig;
}
