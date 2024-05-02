import { ISoundSelectorProps } from "./ISoundSelectorProps";

export const SoundSelector: React.FC<ISoundSelectorProps> = (props) => {
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <select onChange={onSelect}>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  );
};
