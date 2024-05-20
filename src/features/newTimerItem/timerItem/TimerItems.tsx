import { useEffect, useState } from "react";
import { ITimerItemProps } from "./ITimerItemsProps";

export const TimerItem: React.FC<ITimerItemProps> = (props) => {
  const [runtime, setRuntime] = useState(0);
  const [timerTimeout, setTimerTimeout] = useState<NodeJS.Timeout | undefined>(
    undefined
  );

  useEffect(() => {
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [timerTimeout]);

  const onStart = (runtime: number) => {
    if (runtime >= props.timerConfig.duration) {
      return;
    }
    onCycle(runtime);
  };

  const onCycle = (runtime: number) => {
    if (runtime >= props.timerConfig.duration) {
      props.onCompleted?.(props.timerConfig);
      console.log("Completed");
      return;
    }

    const timerTimeout = setTimeout(() => {
      setRuntime((previous) => {
        previous++;
        onCycle(previous);
        return previous;
      });
    }, 1000);
    setTimerTimeout(timerTimeout);
  };

  const onPause = () => clearTimeout(timerTimeout);

  const onReset = () => {
    clearTimeout(timerTimeout);
    setRuntime(0);
  };

  return (
    <div>
      {`Current Runtime ${runtime}`}
      <button onClick={() => onStart(runtime)}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
