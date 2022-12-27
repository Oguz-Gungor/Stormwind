import * as React from "react";
import "./ImageLink.scss";

export interface ImageLinkProps {
  src: string;
  label: string;
}

export function ImageLink(props: ImageLinkProps) {
  return (
    <div className="image-link-container flex column-flex">
      <label>{props.label}</label>
      <div className="image-wrapper">
        <img src={props.src} className="image" />
      </div>
    </div>
  );
}
