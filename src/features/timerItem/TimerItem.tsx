import { useId } from "react";
import { Todo } from "../../core/utils/Todo";
import { SoundSelector } from "../soundSelector/SoundSelector";
import { ITimerItemProps } from "./ITimerItemProps";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>Time in min</label>
      <input type="number" id={inputId} />
      <SoundSelector
        onSelect={() => {
          Todo();
        }}
      />
    </div>
  );
};
