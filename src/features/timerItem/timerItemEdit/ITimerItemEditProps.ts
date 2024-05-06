import { ITimerConfig } from "../../../model/ITimerConfig";

export interface ITimerItemEditProps {
  onChange: (timerConfig: ITimerConfig) => void;
  onDelete: (timerConfig: ITimerConfig) => void;
  onConfirm: () => void;
  timerConfig: ITimerConfig;
}
