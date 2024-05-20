import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemProps {
  onCompleted?: (timerConfig: ITimerConfig) => void;
  timerConfig: ITimerConfig;
}
