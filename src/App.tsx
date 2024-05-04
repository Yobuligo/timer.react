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

  const onAddTimer = () => {
    const timerConfig: ITimerConfig = {
      id: uuidv4(),
      sound: Sound.SingleGong,
      time: 0,
      title: "",
    };
    setTimerConfigs((previous) => {
      const timerConfigs = [...previous, timerConfig];
      updateUserConfig(timerConfigs);
      return timerConfigs;
    });
  };

  const onChangeTimer = (timerConfig: ITimerConfig) => {
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

  const onDeleteTimer = (timerConfig: ITimerConfig) => {
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

  const onStartTimer = (timerConfig: ITimerConfig) =>
    setRunTimerId(timerConfig.id);

  const onStartTimerConfig = (timerConfig: ITimerConfig) =>
    setRunningTimerConfig(timerConfig);

  const onStopTimer = () => {
    setRunningTimerConfig(undefined);
    setRunTimerId(InitialRunTimerId);
  };

  return (
    <div className={styles.app}>
      <div className={styles.timerPanel}>
        <TimerPanel
          onStartTimerConfig={onStartTimerConfig}
          onStopTimer={onStopTimer}
          runTimerId={runTimerId}
          setRuntime={setRuntime}
          timerConfigs={timerConfigs}
        />
      </div>
      <TimerList
        onAdd={onAddTimer}
        onChange={onChangeTimer}
        onDelete={onDeleteTimer}
        onStart={onStartTimer}
        timerConfigs={timerConfigs}
        runningTimerConfig={runningTimerConfig}
        runtime={runtime}
      />
    </div>
  );
};
