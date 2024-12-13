export interface IsectionHead {
  headName: string;
  headTitle: string;
}
export interface IIconInterface {
  className: string;
}
export interface IStars {
  stars: number;
}
export interface IIPropsButton {
  text: string;
  onClick?: () => void;
  buttonType?: "submit" | "button" | "reset";
}
