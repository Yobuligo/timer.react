import { useState } from "react";
import { StyleFactory } from "../../services/StyleFactory";
import { Sound } from "../../types/Sound";
import { ISoundSelectorProps } from "./ISoundSelectorProps";
import styles from "./SoundSelector.module.scss";

export const SoundSelector: React.FC<ISoundSelectorProps> = (props) => {
  const [sound, setSound] = useState(props.initialSound);
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSound = event.target.value as any as Sound;
    props.onSelect(newSound);
    setSound(Sound[newSound] as unknown as Sound);
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
      style={StyleFactory.createBySound(sound)}
      value={Sound[sound]}
    >
      {items}
    </select>
  );
};
