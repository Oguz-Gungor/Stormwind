import * as React from "react";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ColorStyle } from "../types/StyleTypes";

const lines: Line[] = [
  { length: 120, placement: "15%" },
  { length: 100, placement: "45%" },
];

export function AboutUs() {
  return (
    <Page colorStyle={ColorStyle.SECONDARY} lines={lines}>
      About us
    </Page>
  );
}
