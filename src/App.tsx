import { useState } from "react";
import { TimerList } from "./features/timerList/TimerList";
import { TimerPanel } from "./features/timerPanel/TimerPanel";
import { ITimerConfig } from "./model/ITimerConfig";
import { Sound } from "./types/Sound";

export const App: React.FC = () => {
  const [timerConfigs, setTimerConfigs] = useState<ITimerConfig[]>([]);

  const onAddTimer = () => {
    const timerConfig: ITimerConfig = {
      time: 0,
      sound: Sound.FIRST,
    };
    setTimerConfigs((previous) => [...previous, timerConfig]);
  };

  const onChangeTimer = (timerConfig: ITimerConfig) => {
    setTimerConfigs((previous) => {
      const index = previous.findIndex((item) => item === timerConfig);
      if (index !== -1) {
        previous.splice(index, 1, timerConfig);
      }
      return [...previous];
    });
  };

  return (
    <>
      <TimerList
        onAddTimer={onAddTimer}
        onChangeTimer={onChangeTimer}
        timerConfigs={timerConfigs}
      />
      <TimerPanel timerConfigs={timerConfigs} />
    </>
  );
};
