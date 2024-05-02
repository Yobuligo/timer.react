export const writeLocalStorage = <T>(key: string, value: T): T => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
  return value;
};
