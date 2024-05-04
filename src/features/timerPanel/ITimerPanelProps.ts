import { ITimerConfig } from "../../model/ITimerConfig";

export interface ITimerPanelProps {
  onStartTimerConfig: (timerConfig: ITimerConfig) => void;
  onStopTimer: () => void;
  runTimerId: string;
  setRuntime: React.Dispatch<React.SetStateAction<number>>;
  timerConfigs: ITimerConfig[];
}
