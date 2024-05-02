import { useId } from "react";
import { ITimerProps } from "./ITimerProps";

export const Timer: React.FC<ITimerProps> = (props) => {
  const inputId = useId();
  return (
    <>
      <label htmlFor={inputId}>Time in min</label>
      <input type="number" id={inputId} />
    </>
  );
};
