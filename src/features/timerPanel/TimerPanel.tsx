import { ITimerPanelProps } from "./ITimerPanelProps";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  return (
    <>
      <button>Start</button>
      <button>Reset</button>
    </>
  );
};
