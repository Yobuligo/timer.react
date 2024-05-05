import { ReactComponent as Image } from "../../assets/play.svg";
import styles from "./Icon.module.scss";

export const PlayIcon: React.FC = () => {
  return <Image className={styles.icon} />;
};
