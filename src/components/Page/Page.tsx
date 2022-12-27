import * as React from "react";
import { StyleProps } from "../../types/ComponentTypes";
import Background, { BackgroundProps } from "./Background";
import Content, { ContentProps } from "./Content";

export interface PageProps extends BackgroundProps, ContentProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <Content colorStyle={props.colorStyle} className={props.className}>
        <Background colorStyle={props.colorStyle} lines={props.lines} />
        <div className="page-content">{props.children}</div>
      </Content>
    </>
  );
}
