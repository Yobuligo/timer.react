import { ReactComponent as Image } from "../../assets/pause.svg";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.scss";

export const PauseIcon: React.FC<IIconProps> = (props) => {
  return <Image className={styles.icon} onClick={props.onClick} />;
};
