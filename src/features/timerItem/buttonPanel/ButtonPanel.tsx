import styles from "./ButtonPanel.module.scss";
import { IButtonPanelProps } from "./IButtonPanelProps";

export const ButtonPanel: React.FC<IButtonPanelProps> = (props) => {
  return <div className={styles.buttonPanel}>{props.children}</div>;
};
