import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm0 15A7 7 0 1 1 9 2a7 7 0 0 1 0 14zM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3zm.05 1a1.15 1.15 0 1 1-1.12 1.18v-.03A1.13 1.13 0 0 1 9.04 4h.01zm4.14 3l-3 1v2.17l1 3.34a.33.33 0 0 1-.57.32L9 10.25l-1.7 3.59a.34.34 0 0 1-.47.08.31.31 0 0 1-.095-.428l.015-.022 1.06-3.32V7.93l-3-1a.319.319 0 0 1-.18-.28.35.35 0 0 1 .18-.3.538.538 0 0 1 .35 0L9 7l3.82-.64h.15a.33.33 0 0 1 .35.2.33.33 0 0 1-.13.44z" /></svg>;
  }

}