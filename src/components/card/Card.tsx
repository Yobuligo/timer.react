import { style } from "../../utils/style";
import styles from "./Card.module.scss";
import { ICardProps } from "./ICardProps";

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className={style(styles.card, props.className)} style={props.style}>
      {props.children}
    </div>
  );
};
