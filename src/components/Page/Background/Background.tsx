import * as React from "react";
import { ComponentProps, StyleProps } from "../../../types/ComponentTypes";
import { ColorStyle } from "../../../types/StyleTypes";
import "./Background.scss";

export interface BackgroundProps extends StyleProps {
  lines?: Line[];
}

export default function Background(props: BackgroundProps) {
  return (
    <div className={"page-background" + props.colorStyle}>
      {props.lines &&
        props.lines.map(({ length, placement }) => (
          <Line
            colorStyle={props.colorStyle}
            length={length}
            placement={placement}
          />
        ))}
    </div>
  );
}

export interface Line {
  length: number | string;
  placement: string | number;
}

interface LineProps extends StyleProps, Line {}
function Line(props: LineProps) {
  return (
    <div
      className={"line" + props.colorStyle}
      style={{ height: props.length, left: props.placement }}
    />
  );
}
