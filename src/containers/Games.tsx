import * as React from "react";
import { Line } from "../components/Page/Background/Background";
import Page from "../components/Page/Page";
import { HiddenImageLink } from "../components/Sub/HiddenImageLink/HiddenImageLink";
import { ColorStyle } from "../types/StyleTypes";
import { ImageMenu } from "./ICT";
import "./Games.scss";
import { ContainerMark } from "../components/Sub/ContainerMark/ContainerMark";
import { StoreLink } from "../components/Sub/StoreLink/StoreLink";

const lines: Line[] = [
  { length: 150, placement: "15%" },
  { length: 260, placement: "45%" },
];

const images = [
  {
    src: "image1.png",
    displayedImage: "Rectangle28.png",
    label: "Snakes and Ladders",
  },
  {
    src: "image2.png",
    displayedImage: "Rectangle28.png",
    label: "Minesweeper",
  },
  {
    src: "image3.png",
    displayedImage: "Rectangle28.png",
    label: "Word Hunter Cross",
  },
  {
    src: "image5.png",
    displayedImage: "Rectangle28.png",
    label: "Crazy Eights",
  },
];

export function Games() {
  return (
    <Page
      colorStyle={ColorStyle.PRIMARY}
      lines={lines}
      className="games-content"
      id={Games.name}
    >
      <div className="flex column-flex container-flex">
        <ContainerMark />
        {descriptionFlex()}
        <HiddenImageMenu />
      </div>
    </Page>
  );
}

const descriptionFlex = () => {
  return (
    <div className="flex row-flex description-flex">
      {leftFlex()}
      {rightFlex()}
    </div>
  );
};

const leftFlex = () => {
  return (
    <div className="flex column-flex left-flex">
      <div>STORMWIND GAMES</div>
      <div>
        Stormwind Games is a game design company that caters to all kinds of
        user groups and runs each game personally. It aims to provide a
        different experience to the user with its creative and original designs.
      </div>
    </div>
  );
};

const rightFlex = () => {
  return (
    <div className="flex column-flex right-flex">
      <div>
        At the same time, it offers different alternatives by trying new and
        different designs by leading the sector in every game it releases.
      </div>
      <div className="flex row-flex store-flex">
        <StoreLink
          image="google-play1.png"
          label="GP"
          hiddenLabel={<div>GET IT ON</div>}
        />
        <StoreLink
          image="apple.png"
          label="AS"
          hiddenLabel={<div>DOWNLOAD</div>}
        />
      </div>
    </div>
  );
};

const HiddenImageMenu = () =>
  ImageMenu(
    images.map(({ src, displayedImage, label }) => (
      <HiddenImageLink
        src={src}
        displayedImage={displayedImage}
        label={label}
      />
    ))
  );
