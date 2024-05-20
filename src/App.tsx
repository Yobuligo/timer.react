import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.scss";
import { TimerList } from "./features/timerList/TimerList";
import { TimerPanel } from "./features/timerPanel/TimerPanel";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ITimerConfig } from "./model/ITimerConfig";
import { IUserConfig } from "./model/IUserConfig";
import { InitialRunTimerId } from "./types/InitialRunTimerId";
import { Sound } from "./types/Sound";

export const App: React.FC = () => {
  const [runtime, setRuntime] = useState(0);
  const [pause, setPause] = useState(false);
  const [runTimerId, setRunTimerId] = useState<string>(InitialRunTimerId);
  const [userConfig, setUserConfig] = useLocalStorage<IUserConfig>(
    "userConfig",
    { timerConfigs: [] }
  );
  const [timerConfigs, setTimerConfigs] = useState<ITimerConfig[]>(
    userConfig.timerConfigs
  );

  const [runningTimerConfig, setRunningTimerConfig] = useState<
    ITimerConfig | undefined
  >(undefined);

  const updateUserConfig = (timerConfigs: ITimerConfig[]) => {
    userConfig.timerConfigs = timerConfigs;
    setUserConfig(userConfig);
  };

  const onAdd = () => {
    const timerConfig: ITimerConfig = {
      duration: 0,
      editMode: true,
      id: uuidv4(),
      sound: Sound.SingleGong,
      title: "Enter your title",
    };
    setTimerConfigs((previous) => {
      const timerConfigs = [...previous, timerConfig];
      updateUserConfig(timerConfigs);
      return timerConfigs;
    });
  };

  const onChange = (timerConfig: ITimerConfig) => {
    setTimerConfigs((previous) => {
      const index = previous.findIndex((item) => item.id === timerConfig.id);
      if (index !== -1) {
        previous.splice(index, 1, timerConfig);
      }
      const timerConfigs = [...previous];
      updateUserConfig(timerConfigs);
      return timerConfigs;
    });
  };

  const onDelete = (timerConfig: ITimerConfig) => {
    setTimerConfigs((previous) => {
      const index = previous.findIndex((item) => item.id === timerConfig.id);
      if (index !== -1) {
        previous.splice(index, 1);
      }
      const timerConfigs = [...previous];
      updateUserConfig(timerConfigs);
      return timerConfigs;
    });
  };

  const onPlay = (timerConfig: ITimerConfig) => setRunTimerId(timerConfig.id);

  const onStartTimerConfig = (timerConfig: ITimerConfig) =>
    setRunningTimerConfig(timerConfig);

  const onStopTimer = () => {
    setRunningTimerConfig(undefined);
    setRunTimerId(InitialRunTimerId);
  };

  const onPause = (timerConfig: ITimerConfig) => setPause(true);

  return (
    <div className={styles.app}>
      <div className={styles.timerPanel}>
        <TimerPanel
          onStartTimerConfig={onStartTimerConfig}
          onStopTimer={onStopTimer}
          pause={pause}
          runTimerId={runTimerId}
          setRuntime={setRuntime}
          timerConfigs={timerConfigs}
        />
      </div>
      <TimerList
        onAdd={onAdd}
        onChange={onChange}
        onDelete={onDelete}
        onPause={onPause}
        onPlay={onPlay}
        timerConfigs={timerConfigs}
        runningTimerConfig={runningTimerConfig}
        runtime={runtime}
      />

      {/* <TimerItemList timerConfigs={timerConfigs} /> */}
    </div>
  );
};
