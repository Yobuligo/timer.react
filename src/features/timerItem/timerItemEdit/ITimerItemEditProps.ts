import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemEditProps {
  onChange: (timerConfig: ITimerConfig) => void;
  timerConfig: ITimerConfig;
}
