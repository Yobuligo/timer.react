import { useId } from "react";
import { ITimerItemProps } from "./ITimerItemProps";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>Time in min</label>
      <input type="number" id={inputId} />
    </div>
  );
};
