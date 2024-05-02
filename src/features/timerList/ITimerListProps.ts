import { ITimer } from "../../model/ITimer";

export interface ITimerListProps {
  timers: ITimer[];
  onAddTimer: () => void;
  onChangeTimer: (timer: ITimer) => void;
}
