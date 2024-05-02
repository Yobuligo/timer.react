import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerItemProps {
  onChange: (timerConfig: ITimerConfig) => void;
  onDelete: (timerConfig: ITimerConfig) => void;
  timerConfig: ITimerConfig;
}
