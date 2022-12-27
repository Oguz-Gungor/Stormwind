import { ColorStyle } from "./StyleTypes";

export interface ComponentProps {
  children?: React.ReactNode ;
  className?: string;
}


export interface StyleProps extends ComponentProps {
  colorStyle: ColorStyle;
}
