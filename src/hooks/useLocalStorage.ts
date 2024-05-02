import { useState } from "react";
import { readLocalStorage } from "../utils/readLocalStorage";
import { writeLocalStorage } from "../utils/writeLocalStorage";

export const useLocalStorage = <T>(key: string, fallbackValue: T) => {
  const [value, setValue] = useState<T>(
    readLocalStorage(key) ?? writeLocalStorage(key, fallbackValue)
  );

  const updateValue = (newValue: T) => {
    writeLocalStorage(key, newValue);
    setValue(newValue);
  };

  return [value, updateValue];
};
