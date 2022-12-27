import * as React from "react";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { HiddenImageLink } from "../components/Sub/HiddenImageLink";
import { ColorStyle } from "../types/StyleTypes";
import { ImageMenu } from "./ICT";
import "./Games.scss";

const lines: Line[] = [
  { length: 150, placement: "15%" },
  { length: 260, placement: "45%" },
];

const images = [
  { src: "image1.png", displayedImage: "Rectangle28.png", label: "Snakes and Ladders" },
  { src: "image2.png", displayedImage: "Rectangle28.png", label: "Minesweeper" },
  { src: "image3.png", displayedImage: "Rectangle28.png", label: "Word Hunter Cross" },
  { src: "image5.png", displayedImage: "Rectangle28.png", label: "Crazy Eights" },
];

export function Games() {
  return (
    <Page
      colorStyle={ColorStyle.PRIMARY}
      lines={lines}
      className="games-content"
    >
      <HiddenImageMenu />
    </Page>
  );
}

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
