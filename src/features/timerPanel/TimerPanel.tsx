import { useCallback, useEffect, useMemo } from "react";
import useSound from "use-sound";
import { NotSupportedError } from "../../core/errors/NotSupportedError";
import { InitialRunTimerId } from "../../types/InitialRunTimerId";
import { Sound } from "../../types/Sound";
import { ITimerPanelProps } from "./ITimerPanelProps";
import styles from "./TimerPanel.module.scss";

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

  const playSound = useCallback(
    (sound: Sound) => {
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
    },
    [playDoubleGong, playSingleGong, playTripleGong]
  );

  const onReset = useCallback(() => {
    props.setRuntime(0);
    state.isRunning = false;
    props.onStopTimer();
  }, [props, state]);

  const onStartTimer = useCallback(
    (cursor: number) => {
      const timerConfig = props.timerConfigs[cursor];
      if (timerConfig) {
        props.onStartTimerConfig(timerConfig);
        props.setRuntime(0);
        setTimeout(() => {
          if (state.isRunning) {
            playSound(timerConfig.sound);
            onStartTimer(cursor + 1);
          }
        }, timerConfig.time * 1000);
      } else {
        onReset();
      }
    },
    [onReset, playSound, props, state.isRunning]
  );

  const startCountTime = useCallback(() => {
    if (!state.isRunning) {
      return;
    }

    setTimeout(() => {
      if (state.isRunning) {
        props.setRuntime((previous) => {
          previous++;
          return previous;
        });
        startCountTime();
      }
    }, 1000);
  }, [props, state.isRunning]);

  const onStart = useCallback(
    (index: number) => {
      onStartTimer(index);
      state.isRunning = true;
      startCountTime();
    },
    [onStartTimer, startCountTime, state]
  );

  const findIndexByTimerConfigId = useCallback(
    (timerConfigId: string) => {
      return props.timerConfigs.findIndex(
        (timerConfig) => timerConfig.id === timerConfigId
      );
    },
    [props.timerConfigs]
  );

  useEffect(() => {
    if (props.runTimerId !== InitialRunTimerId) {
      // reset possibly running timer
      onReset();

      // start new timer
      const index = findIndexByTimerConfigId(props.runTimerId);
      if (index === -1) {
        throw Error("Error while starting timer. Timer not found.");
      }
      onStart(index);
    }
  }, [findIndexByTimerConfigId, onReset, onStart, props.runTimerId]);

  return (
    <div>
      <button className={styles.button} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};
