import { ThemeType } from "../utils/types";

export const getLocalStorageItem: (k: string) => ThemeType = (key) => {
  const value: string | null = localStorage.getItem(key);

  if (!value) {
    throw new Error("Theme is not found in local storage!");
  }

  return JSON.parse(value);
};

export const setLocalStorageItem: (k: string, data: ThemeType) => void = (
  key,
  data
) => {
  if (data && key) {
    localStorage.setItem(key, JSON.stringify(data));
  }
};
