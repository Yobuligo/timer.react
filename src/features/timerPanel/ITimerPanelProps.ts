import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerPanelProps {
  timerConfigs: ITimerConfig[];
  onStartTimerConfig: (timerConfig: ITimerConfig) => void;
  onStopTimer: () => void;
  setRuntime: React.Dispatch<React.SetStateAction<number>>;
}
