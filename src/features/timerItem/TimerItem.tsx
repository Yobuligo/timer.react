import { useId } from "react";
import { Sound } from "../../types/Sound";
import { SoundSelector } from "../soundSelector/SoundSelector";
import { ITimerItemProps } from "./ITimerItemProps";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const inputId = useId();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.time = parseInt(event.target.value);
  };

  return (
    <div>
      <label htmlFor={inputId}>Time in min</label>
      <input type="number" id={inputId} min={0} onChange={onChange} />
      <SoundSelector
        onSelect={(sound) => {
          props.timerConfig.sound = Sound[sound] as unknown as Sound;
          props.onChange(props.timerConfig);
        }}
      />
    </div>
  );
};
