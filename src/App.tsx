import { useState } from "react";
import styles from "./App.module.scss";
import { TimerList } from "./features/timerList/TimerList";
import { TimerPanel } from "./features/timerPanel/TimerPanel";
import { ITimerConfig } from "./model/ITimerConfig";
import { IdProvider } from "./services/IdProvider";
import { Sound } from "./types/Sound";

export const App: React.FC = () => {
  const [timerConfigs, setTimerConfigs] = useState<ITimerConfig[]>([]);

  const onAddTimer = () => {
    const timerConfig: ITimerConfig = {
      id: IdProvider.next(),
      sound: Sound.SingleGong,
      time: 0,
      title: "",
    };
    setTimerConfigs((previous) => [...previous, timerConfig]);
  };

  const onChangeTimer = (timerConfig: ITimerConfig) => {
    setTimerConfigs((previous) => {
      const index = previous.findIndex((item) => item.id === timerConfig.id);
      if (index !== -1) {
        previous.splice(index, 1, timerConfig);
      }
      return [...previous];
    });
  };

  const onDeleteTimer = (timerConfig: ITimerConfig) => {
    setTimerConfigs((previous) => {
      const index = previous.findIndex((item) => item.id === timerConfig.id);
      if (index !== -1) {
        previous.splice(index, 1);
      }
      return [...previous];
    });
  };

  return (
    <div className={styles.app}>
      <TimerList
        onAdd={onAddTimer}
        onChange={onChangeTimer}
        onDelete={onDeleteTimer}
        timerConfigs={timerConfigs}
      />
      <div className={styles.timerPanel}>
        <TimerPanel timerConfigs={timerConfigs} />
      </div>
    </div>
  );
};
