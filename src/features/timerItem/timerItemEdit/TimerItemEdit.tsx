import { ConfirmIcon } from "../../../components/icons/ConfirmIcon";
import { DeleteIcon } from "../../../components/icons/DeleteIcon";
import { StyleFactory } from "../../../services/StyleFactory";
import { TimerConverter } from "../../../services/TimeConverter";
import { Sound } from "../../../types/Sound";
import { style } from "../../../utils/style";
import { SoundSelector } from "../../soundSelector/SoundSelector";
import { ButtonPanel } from "../buttonPanel/ButtonPanel";
import { TimerItemCard } from "../timerItemCard/TimerItemCard";
import { ITimerItemEditProps } from "./ITimerItemEditProps";
import styles from "./TimerItemEdit.module.scss";

export const TimerItemEdit: React.FC<ITimerItemEditProps> = (props) => {
  const onChange = () => {
    props.timerConfig.editMode = false;
    props.onChange(props.timerConfig);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.title = event.target.value;
    onChange();
  };

  const onDelete = () => {
    const confirmed = window.confirm("Do you really want to delete the timer?");
    if (confirmed) {
      props.onDelete(props.timerConfig);
    }
  };

  const onSelectSound = (sound: Sound) => {
    props.timerConfig.sound = Sound[sound] as unknown as Sound;
    onChange();
  };

  const onChangeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.timerConfig.duration = TimerConverter.timeToSeconds(
      event.target.value
    );
    onChange();
  };

  return (
    <TimerItemCard sound={props.timerConfig.sound}>
      <input
        className={style(styles.input, styles.inputTitle)}
        onChange={onChangeTitle}
        style={StyleFactory.createBySound(props.timerConfig.sound)}
        type="text"
        value={props.timerConfig.title}
      />
      <div className={styles.footer}>
        <input
          className={style(styles.input, styles.watch)}
          min={0}
          onChange={onChangeTime}
          style={StyleFactory.createBySound(props.timerConfig.sound)}
          type="time"
          value={TimerConverter.secToTime(props.timerConfig.duration)}
        />
        <SoundSelector
          initialSound={props.timerConfig.sound}
          onSelect={onSelectSound}
        />
        <ButtonPanel>
          <DeleteIcon onClick={onDelete} />
          <ConfirmIcon onClick={props.onConfirm} />
        </ButtonPanel>
      </div>
    </TimerItemCard>
  );
};
