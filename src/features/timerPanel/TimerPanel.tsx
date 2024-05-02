import { useState } from "react";
import { ITimerConfig } from "../../model/ITimerConfig";
import { ITimerPanelProps } from "./ITimerPanelProps";

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const [cursor, setCursor] = useState<ITimerConfig | undefined>(undefined);

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
