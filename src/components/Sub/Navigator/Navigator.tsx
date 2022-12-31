import * as React from "react";
import "./Navigator.scss";

export interface INavigatorProps {
  pageList: { Component: React.FC; name?: string }[];
}
export function Navigator(props: INavigatorProps) {
  return (
    <>
      <NavBar pageNameList={props.pageList.map((AppPage) => AppPage.name)} />
      {props.pageList.map((AppPage) => (
        <AppPage.Component />
      ))}
    </>
  );
}

interface INavbarProps {
  pageNameList: (string | undefined)[];
}

function NavBar(props: INavbarProps) {
  return (
    <div className="header-background">
      <div id="Home" className="flex row-flex header-container">
        <span className="brand"> Stormwind</span>
        <div className="flex row-flex navbar-container">
          {props.pageNameList
            .filter((pageName) => pageName)
            .map((pageName) => (
              <a className="navbar-element" href={`#${pageName}`}>
                {(pageName ?? "").replace(/([a-z])([A-Z])/g, "$1 $2")}
              </a>
            ))}
          Language
        </div>
      </div>
    </div>
  );
}

