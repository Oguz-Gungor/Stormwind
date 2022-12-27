import * as React from "react";
import { StyleProps } from "../../types/ComponentTypes";
import "./Content.scss";

export interface ContentProps extends StyleProps {}

export default function Content(props: ContentProps) {
  return (
    <div className={"page-content-wrapper " + props.className + props.colorStyle}>
      {props.children}
    </div>
  );
}
