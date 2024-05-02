import { ITimerPanelProps } from "./ITimerPanelProps";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const onStart = () => {
    debugger;
  };

  return (
    <>
      <button onClick={onStart}>Start</button>
      <button>Reset</button>
    </>
  );
};
