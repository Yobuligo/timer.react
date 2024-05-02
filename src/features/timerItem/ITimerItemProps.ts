import { ITimer } from "../../model/ITimer";

export interface ITimerItemProps {
  timer: ITimer;
  onChange: (timer: ITimer) => void;
}
