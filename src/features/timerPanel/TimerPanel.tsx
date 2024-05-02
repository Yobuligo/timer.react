import { useEffect, useState } from "react";
import { ITimerConfig } from "../../model/ITimerConfig";
import { SoundInfo } from "../../services/SoundInfo";
import { TimerPanelItem } from "../timerPanelItem/TimerPanelItem";
import { ITimerPanelProps } from "./ITimerPanelProps";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const [cursor, setCursor] = useState(-1);

  const [timerConfig, setTimerConfig] = useState<ITimerConfig | undefined>(
    undefined
  );

  useEffect(() => {
    if (cursor !== -1) {
      setTimerConfig(props.timerConfigs[cursor]);
    }
  }, [cursor, props.timerConfigs]);

  const onStart = () => {
    setCursor(0);
  };

  const onReset = () => {
    setCursor(-1);
  };

  const onFinish = () => {
    setCursor((previous) => {
      previous++;

      if (props.timerConfigs[previous] === undefined) {
        return -1;
      } else {
        return previous;
      }
    });
  };

  return (
    <>
      <button onClick={onStart}>Start</button>
      {timerConfig && (
        <TimerPanelItem
          time={timerConfig.time}
          onFinish={onFinish}
          soundPath={SoundInfo.getPath(timerConfig.sound)}
        />
      )}
      <button onClick={onReset}>Reset</button>
    </>
  );
};
