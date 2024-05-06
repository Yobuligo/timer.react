import { ReactComponent as Image } from "../../assets/delete.svg";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.scss";

export const DeleteIcon: React.FC<IIconProps> = (props) => {
  return <Image className={styles.icon} onClick={props.onClick} />;
};
