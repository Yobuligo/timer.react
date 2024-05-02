import { useId } from "react";
import { Sound } from "../../types/Sound";
import { SoundSelector } from "../soundSelector/SoundSelector";
import { ITimerItemProps } from "./ITimerItemProps";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const inputId = useId();

  const onChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.time = parseInt(event.target.value);
    props.onChange(props.timerConfig);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.title = event.target.value;
    props.onChange(props.timerConfig);
  };

  return (
    <div>
      <label htmlFor={inputId}>Time in min</label>
      <input
        type="number"
        id={inputId}
        min={0}
        onChange={onChangeTime}
        style={{ width: "3rem" }}
      />
      <input type="text" onChange={onChangeText} />
      <SoundSelector
        onSelect={(sound) => {
          props.timerConfig.sound = Sound[sound] as unknown as Sound;
          props.onChange(props.timerConfig);
        }}
      />
    </div>
  );
};
