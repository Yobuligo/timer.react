import { useState } from "react";
import { TimerList } from "./features/timerList/TimerList";
import { TimerPanel } from "./features/timerPanel/TimerPanel";
import { ITimer } from "./model/ITimer";
import { Sound } from "./types/Sound";

export const App: React.FC = () => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const onAddTimer = () => {
    const timer: ITimer = {
      time: 0,
      sound: Sound.FIRST,
    };
    setTimers((previous) => [...previous, timer]);
  };

  const onChangeTimer = (timer: ITimer) => {
    setTimers((previous) => {
      const index = previous.findIndex((item) => item === timer);
      if (index !== -1) {
        previous.splice(index, 1, timer);
      }
      return [...previous];
    });
  };

  return (
    <>
      <TimerList
        onAddTimer={onAddTimer}
        onChangeTimer={onChangeTimer}
        timers={timers}
      />
      <TimerPanel timers={timers} />
    </>
  );
};
