import { ReactComponent as Image } from "../../assets/edit.svg";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.scss";

export const EditIcon: React.FC<IIconProps> = (props) => {
  return <Image className={styles.icon} onClick={props.onClick} />;
};
