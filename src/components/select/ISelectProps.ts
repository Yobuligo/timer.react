import { IOption } from "./IOption";

export interface ISelectProps<T extends IOption> {
  onSelect?: (option: T) => void;
  options: T[];
  title?: string;
}
