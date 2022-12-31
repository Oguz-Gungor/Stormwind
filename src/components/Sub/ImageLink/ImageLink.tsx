import * as React from "react";
import { i18Nget } from "../../../App";
import "./ImageLink.scss";

export interface ImageLinkProps {
  src: string;
  label: React.ReactNode;
}

export function ImageLink(props: ImageLinkProps) {
  return (
    <div className="image-link-container flex column-flex">
      <label>
        {typeof props.label === "string" ? i18Nget(props.label) : props.label}
      </label>
      <div className="image-wrapper">
        <img src={props.src} className="image" />
      </div>
    </div>
  );
}
