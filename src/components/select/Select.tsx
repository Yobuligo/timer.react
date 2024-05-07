import { useId } from "react";
import { IOption } from "./IOption";
import { ISelectProps } from "./ISelectProps";
import styles from "./Select.module.scss";

export function Select<T extends IOption>(props: ISelectProps<T>) {
  const selectId = useId();

  const items = props.options.map((option) => (
    <option key={option.key}>{option.text}</option>
  ));

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
  };

  return (
    <div className={props.title && styles.select}>
      <label htmlFor={selectId}>{props.title}</label>
      <select id={selectId} onChange={onSelect}>
        {items}
      </select>
    </div>
  );
}
