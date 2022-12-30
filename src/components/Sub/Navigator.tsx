import * as React from "react";
import "./Navigator.scss";

export interface INavigatorProps {
  pageList: React.FC[];
}
export function Navigator(props: INavigatorProps) {
  return (
    <>
      <NavBar pageNameList={props.pageList.map((AppPage) => AppPage.name)} />
      {props.pageList.map((AppPage) => (
        <AppPage />
      ))}
    </>
  );
}

interface INavbarProps {
  pageNameList: string[];
}
function NavBar(props: INavbarProps) {
  return (
    <div className="flex row-flex navbar-container">
      {props.pageNameList.map((pageName) => (
        <a className="navbar-element" href={`#${pageName}`}>
          {pageName} |{" "}
        </a>
      ))}
    </div>
  );
}
