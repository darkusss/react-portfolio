export type ThemeType = {
  [key: string]: string;
};

export type NavProps = {
  checked: boolean,
  open: boolean,
}

export type HeaderProps  = {
  onSetTheme: () => void;
  checked: boolean;
};

export type Fact = {
  id: string,
  title: string,
  source: string,
  source_url: string,
  permalink: string
};

