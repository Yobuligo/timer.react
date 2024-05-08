import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemProps {
  isRunning: boolean;
  onChange: (timerConfig: ITimerConfig) => void;
  onDelete: (timerConfig: ITimerConfig) => void;
  onPause: (timerConfig: ITimerConfig) => void;
  onPlay: (timerConfig: ITimerConfig) => void;
  runtime: number;
  timerConfig: ITimerConfig;
}
