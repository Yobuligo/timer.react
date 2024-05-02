import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerListProps {
  timerConfigs: ITimerConfig[];
  onAddTimer: () => void;
  onChangeTimer: (timerConfig: ITimerConfig) => void;
}
