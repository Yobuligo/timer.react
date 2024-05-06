import { ReactComponent as Image } from "../../assets/check.svg";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.scss";

export const ConfirmIcon: React.FC<IIconProps> = (props) => {
  return <Image className={styles.icon} onClick={props.onClick} />;
};
