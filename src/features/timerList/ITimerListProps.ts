import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerListProps {
  onAdd: () => void;
  onChange: (timerConfig: ITimerConfig) => void;
  onDelete: (timerConfig: ITimerConfig) => void;
  onPause: (timerConfig: ITimerConfig) => void;
  onPlay: (timerConfig: ITimerConfig) => void;
  runningTimerConfig: ITimerConfig | undefined;
  runtime: number;
  timerConfigs: ITimerConfig[];
}
