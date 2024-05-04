import { Sound } from "../../types/Sound";
import { ISoundSelectorProps } from "./ISoundSelectorProps";
import styles from "./SoundSelector.module.scss";

export const SoundSelector: React.FC<ISoundSelectorProps> = (props) => {
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onSelect(event.target.value as any as Sound);
  };

  const sounds = Object.keys(Sound).filter(
    (element) => !(parseInt(element) >= 0)
  );

  const items = sounds.map((sound, index) => (
    <option key={index}>{sound}</option>
  ));

  return (
    <select
      className={styles.selectSound}
      onChange={onSelect}
      value={Sound[props.initialSound]}
    >
      {items}
    </select>
  );
};
