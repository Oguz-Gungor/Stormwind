import * as React from "react";
import { ImageLinkProps } from "../ImageLink/ImageLink";
import "./HiddenImageLink.scss";

export interface HiddenImageLinkProps extends ImageLinkProps {
  displayedImage: string;
  hiddenlabel?: React.ReactNode;
  direction?: string;
  className?: string;
}
export function HiddenImageLink(props: HiddenImageLinkProps) {
  return (
    <div
      className={"hidden-imagelink-wrapper " + props.className}
      style={{ backgroundImage: `url(${props.src})` }}
    >
      {props.hiddenlabel && (
        <label className="hidden-label">{props.hiddenlabel}</label>
      )}
      <label className={"displayed-label " + (props.direction ?? "rotated")}>
        {props.label}
      </label>
      <img src={props.displayedImage} className="image displayed-image" />
    </div>
  );
}
