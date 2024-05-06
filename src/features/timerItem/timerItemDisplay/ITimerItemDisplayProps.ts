import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemDisplayProps {
  onEdit?: () => void;
  onPlay?: () => void;
  timerConfig: ITimerConfig;
}
