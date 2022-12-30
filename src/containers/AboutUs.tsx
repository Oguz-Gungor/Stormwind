import * as React from "react";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ColorStyle } from "../types/StyleTypes";

const lines: Line[] = [{ length: "13.3%", placement: "27.3%" }];

export function AboutUs() {
  return (
    <Page colorStyle={ColorStyle.SECONDARY} lines={lines} id={AboutUs.name}>
      About us
    </Page>
  );
}
