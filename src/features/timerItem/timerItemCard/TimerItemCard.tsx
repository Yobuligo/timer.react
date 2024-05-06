import { Card } from "../../../components/card/Card";
import { StyleFactory } from "../../../services/StyleFactory";
import { ITimerItemCardProps } from "./ITimerItemCardProps";
import styles from "./TimerItemCard.module.scss";

export const TimerItemCard: React.FC<ITimerItemCardProps> = (props) => {
  return (
    <Card
      className={styles.timerItemCard}
      style={StyleFactory.createBySound(props.sound)}
    >
      {props.children}
    </Card>
  );
};
