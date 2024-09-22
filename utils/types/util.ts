export interface IButton {
  label: string;
  color?: ICompontColor[];
  size?: TBoxSize;
}

export interface ICompontColor {
  colorSet: TColorSet;
  location: TLocation;
}

type TBoxSize = "xs" | "s" | "m" | "l" | "xl";
type TColorSet = "main" | "error" | "info" | "success" | "warning" | "white";
type TLocation = "inline" | "outline" | "background";
