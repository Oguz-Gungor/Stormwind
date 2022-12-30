import * as React from "react";
import { StyleProps } from "../../types/ComponentTypes";
import "./Content.scss";

export interface ContentProps extends StyleProps {
  id?: string;
}

export default function Content(props: ContentProps) {
  return (
    <div
      id={props.id ? props.id : undefined}
      className={"page-content-wrapper " + props.className + props.colorStyle}
    >
      {props.children}
    </div>
  );
}
