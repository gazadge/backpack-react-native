import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M12.707 11.293c.189.189.293.44.293.707a.993.993 0 0 1-.293.707A.993.993 0 0 1 12 13a.993.993 0 0 1-.707-.293A.993.993 0 0 1 11 12c0-.267.104-.518.293-.707A.993.993 0 0 1 12 11c.267 0 .518.104.707.293zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-4.585-5.76l-6.114 3.891c-.26.097-.506.246-.715.455a1.987 1.987 0 0 0-.455.715l-3.89 6.114c-.144.226.12.489.345.345l6.113-3.89a1.99 1.99 0 0 0 .716-.455c.209-.209.358-.455.455-.715l3.891-6.114c.143-.226-.121-.49-.346-.346z" /></svg>;
  }

}