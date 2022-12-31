import * as React from "react";
import "./StoreLink.scss";

interface IStoreLinkProps {
  image: string;
  label: React.ReactNode;
  hiddenLabel: React.ReactNode;
}

export function StoreLink(props: IStoreLinkProps) {
  return (
    <div className="flex row-flex store-link-container">
      <div className="hidden-label">{props.hiddenLabel}</div>
      <img src={props.image} className="image" />
      <div className="label">{props.label}</div>
    </div>
  );
}
