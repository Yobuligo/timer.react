import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerItemProps {
  timerConfig: ITimerConfig;
  onChange: (timerConfig: ITimerConfig) => void;
}
