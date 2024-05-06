import { Card } from "../../../components/card/Card";
import { ITimerItemCardProps } from "./ITimerItemCardProps";
import styles from "./TimerItemCard.module.scss";

export const TimerItemCard: React.FC<ITimerItemCardProps> = (props) => {
  return <Card className={styles.timerItemCard}>{props.children}</Card>;
};
