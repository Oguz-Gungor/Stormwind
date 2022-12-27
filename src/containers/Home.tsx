import * as React from "react";
import { Line } from "../components/Page/Background";
import Page from "../components/Page/Page";
import { ColorStyle } from "../types/StyleTypes";

const lines:Line[] = [
    {length:120,placement:"30%"},
    {length:360,placement:"60%"},
];

export default function Home() {
  return (
    <Page colorStyle={ColorStyle.PRIMARY} lines={lines}>
      Home
    </Page>
  );
}
