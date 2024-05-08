import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemDisplayProps {
  isRunning: boolean;
  onEdit: () => void;
  onPlay?: (timerConfig: ITimerConfig) => void;
  onPause?: (timerConfig: ITimerConfig) => void;
  runtime: number;
  timerConfig: ITimerConfig;
}
