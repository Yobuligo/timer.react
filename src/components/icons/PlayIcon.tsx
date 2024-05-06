import { ReactComponent as Image } from "../../assets/play.svg";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.scss";

export const PlayIcon: React.FC<IIconProps> = (props) => {
  return <Image className={styles.icon} onClick={props.onClick} />;
};
