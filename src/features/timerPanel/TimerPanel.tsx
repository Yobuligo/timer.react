import { useMemo } from "react";
import useSound from "use-sound";
import { NotSupportedError } from "../../core/errors/NotSupportedError";
import { Sound } from "../../types/Sound";
import { ITimerPanelProps } from "./ITimerPanelProps";

interface IState {
  isRunning: boolean;
}

export const TimerPanel: React.FC<ITimerPanelProps> = (props) => {
  const [playSingleGong] = useSound("/assets/single_gong.mp3");
  const [playDoubleGong] = useSound("/assets/double_gong.mp3");
  const [playTripleGong] = useSound("/assets/triple_gong.mp3");

  const state: IState = useMemo(
    () => ({
      isRunning: false,
    }),
    []
  );

  const playSound = (sound: Sound) => {
    switch (sound) {
      case Sound.SingleGong: {
        playSingleGong();
        break;
      }
      case Sound.DoubleGong: {
        playDoubleGong();
        break;
      }
      case Sound.TripleGong: {
        playTripleGong();
        break;
      }
      default: {
        throw new NotSupportedError();
      }
    }
  };

  const onTimer = (cursor: number) => {
    const timerConfig = props.timerConfigs[cursor];
    if (timerConfig) {
      props.onStartTimerConfig(timerConfig);
      props.setRuntime(0);
      setTimeout(() => {
        if (state.isRunning) {
          playSound(timerConfig.sound);
          onTimer(cursor + 1);
        }
      }, timerConfig.time * 1000);
    } else {
      onReset();
    }
  };

  const onStart = () => {
    onTimer(0);
    state.isRunning = true;
    startCycle();
  };

  const startCycle = () => {
    if (!state.isRunning) {
      return;
    }

    setTimeout(() => {
      if (state.isRunning) {
        props.setRuntime((previous) => {
          previous++;
          return previous;
        });
        startCycle();
      }
    }, 1000);
  };

  const onReset = () => {
    props.setRuntime(0);
    state.isRunning = false;
    props.onStopTimer();
  };

  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
