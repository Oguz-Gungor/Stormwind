import * as React from "react";
import { ImageLinkProps } from "./ImageLink";
import "./HiddenImageLink.scss";

export interface HiddenImageLinkProps extends ImageLinkProps {
  displayedImage: string;
}
export function HiddenImageLink(props: HiddenImageLinkProps) {
  return (
    <div
      className="hidden-imagelink-wrapper"
      style={{ backgroundImage: `url(${props.src})` }}
    >
      <label className="displayed-label">
        {props.label}
      </label>
      <img
        src={props.displayedImage}
        className="image displayed-image"
      />
    </div>
  );
}
