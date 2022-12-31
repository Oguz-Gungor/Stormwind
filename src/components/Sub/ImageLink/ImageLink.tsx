import * as React from "react";
import { i18Nget } from "../../../App";
import "./ImageLink.scss";

export interface ImageLinkProps {
  src: string;
  label: string;
}

export function ImageLink(props: ImageLinkProps) {
  return (
    <div className="image-link-container flex column-flex">
      <label>{i18Nget(props.label)}</label>
      <div className="image-wrapper">
        <img src={props.src} className="image"/>
      </div>
    </div>
  );
}
