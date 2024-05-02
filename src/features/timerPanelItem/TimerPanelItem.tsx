import { useEffect, useState } from "react";
import useSound from "use-sound";
import { useTimer } from "../../hooks/useTimer";
import { ITimerPanelItemProps } from "./ITimerPanelItemProps";

export const TimerPanelItem: React.FC<ITimerPanelItemProps> = (props) => {
  // const timer = useTimer(props.time * 60);
  const timer = useTimer(5);
  const [seconds, setSeconds] = useState(0);
  const [playSound] = useSound(props.soundPath);

  useEffect(() => {
    timer.onTick((seconds) => {
      setSeconds(seconds);
    });
    timer.onFinish(() => {
      playSound();
      props.onFinish();
    });
    timer.start();

    return () => {
      timer.reset();
    };
  }, [playSound]);

  return <>{seconds}</>;
};
