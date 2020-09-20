export type ThemeType = {
  [key: string]: string;
};

export type GlobalStyleProps = {
  theme: ThemeType;
};

export type NavProps = {
  checked: boolean;
  open: boolean;
};

export type FlexProps = {
  reverse?: boolean;
};

export type HeaderProps = {
  onSetTheme: () => void;
  checked: boolean;
};
