import { ITimerConfig } from "../../model/ITimerConfig";

export interface IDisplayCardProps {
  onEdit?: () => void;
  onPlay?: () => void;
  timerConfig: ITimerConfig;
}
