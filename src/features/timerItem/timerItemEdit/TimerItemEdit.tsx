import { ConfirmIcon } from "../../../components/icons/ConfirmIcon";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import { Sound } from "../../../types/Sound";
import { SoundSelector } from "../../soundSelector/SoundSelector";
import { TimerItemCard } from "../timerItemCard/TimerItemCard";
import { ITimerItemEditProps } from "./ITimerItemEditProps";
import styles from "./TimerItemEdit.module.scss";

export const TimerItemEdit: React.FC<ITimerItemEditProps> = (props) => {
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.title = event.target.value;
    props.onChange(props.timerConfig);
  };

  const onSelectSound = (sound: Sound) => {
    props.timerConfig.sound = Sound[sound] as unknown as Sound;
    props.onChange(props.timerConfig);
  };

  return (
    <TimerItemCard>
      <input
        className={styles.inputTitle}
        onChange={onChangeTitle}
        type="text"
        value={props.timerConfig.title}
      />
      <div className={styles.footer}>
        <input type="time" className={styles.watch} />
        <SoundSelector
          initialSound={props.timerConfig.sound}
          onSelect={onSelectSound}
        />
        <div>
          <DeleteIcon />
          <ConfirmIcon />
        </div>
      </div>
    </TimerItemCard>
  );
};
