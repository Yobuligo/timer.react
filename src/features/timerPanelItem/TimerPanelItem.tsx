import { useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";
import { ITimerPanelItemProps } from "./ITimerPanelItemProps";

export const TimerPanelItem: React.FC<ITimerPanelItemProps> = (props) => {
  // const timer = useTimer(props.time * 60);
  const timer = useTimer(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    timer.onTick((seconds) => {
      setSeconds(seconds);
    });
    timer.onFinish(() => props.onFinish());
    timer.start();

    return () => {
      timer.reset();
    };
  }, []);

  return <>{seconds}</>;
};
