import { useState } from "react";
import { TimerItemDisplay } from "../timerItemDisplay/TimerItemDisplay";
import { TimerItemEdit } from "../timerItemEdit/TimerItemEdit";
import { ITimerItemProps } from "./ITimerItemProps";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const [editMode, setEditMode] = useState(props.timerConfig.editMode ?? false);

  const onConfirm = () => setEditMode(false);

  const onEdit = () => setEditMode(true);

  return (
    <>
      {editMode ? (
        <TimerItemEdit
          onChange={props.onChange}
          onConfirm={onConfirm}
          onDelete={props.onDelete}
          timerConfig={props.timerConfig}
        />
      ) : (
        <TimerItemDisplay
          isRunning={props.isRunning}
          onEdit={onEdit}
          onPlay={props.onPlay}
          runtime={props.runtime}
          timerConfig={props.timerConfig}
        />
      )}
    </>
  );
};
