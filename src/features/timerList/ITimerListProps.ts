import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerListProps {
  onAdd: () => void;
  onChange: (timerConfig: ITimerConfig) => void;
  onDelete: (timerConfig: ITimerConfig) => void;
  timerConfigs: ITimerConfig[];
}
