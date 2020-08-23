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

export type HeaderProps = {
  onSetTheme: () => void;
  checked: boolean;
};

export type Fact = {
  id: string;
  source: string;
  source_url: string;
  permalink: string;
  text: string;
};
