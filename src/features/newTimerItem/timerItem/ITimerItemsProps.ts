import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemProps {
  onCompleted?: (timerConfig: ITimerConfig) => void;
  onStart?: (timerConfig: ITimerConfig) => void;
  requestStop?: boolean;
  timerConfig: ITimerConfig;
}
