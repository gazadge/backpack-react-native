import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M15.5 3h-13A1.5 1.5 0 0 0 1 4.5v9A1.5 1.5 0 0 0 2.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 15.5 3zM7 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm9 7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V9l2.833 2.833L3.667 13h1l.667-.667L11.5 6.167a1.333 1.333 0 0 1 1.885-.001l.001.001L16 8.783V13.5z" /></svg>;
  }

}