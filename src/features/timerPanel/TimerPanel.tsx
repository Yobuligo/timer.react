import { useState } from "react";
import { ITimerConfig } from "../../model/ITimerConfig";
import { TimerPanelItem } from "../timerPanelItem/TimerPanelItem";
import { ITimerPanelProps } from "./ITimerPanelProps";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const [cursor, setCursor] = useState(0);
  const [timerConfig, setTimerConfig] = useState<ITimerConfig | undefined>(
    undefined
  );

  const onStart = () => {
    setCursor(() => {
      setTimerConfig(props.timerConfigs[0]);
      return 0;
    });
  };

  const onReset = () => {
    setCursor(-1);
  };

  const onFinish = () => {
    setCursor((previous) => {
      previous++;

      if (props.timerConfigs[previous] === undefined) {
        setTimerConfig(undefined);
        return -1;
      } else {
        setTimerConfig(props.timerConfigs[previous]);
        return previous;
      }
    });
  };

  return (
    <>
      <button onClick={onStart}>Start</button>
      {timerConfig && (
        <TimerPanelItem time={timerConfig.time} onFinish={onFinish} />
      )}
      <button onClick={onReset}>Reset</button>
    </>
  );
};
