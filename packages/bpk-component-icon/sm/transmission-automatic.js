import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zM6.5 12.5c0 .275-.225.5-.5.5H5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v1zm0-3c0 .275-.225.5-.5.5H5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v1zm0-3c0 .275-.225.5-.5.5H5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5v1zm7 1.5c0 .55-.45 1-1 1h-1v4c0 .55-.45 1-1 1s-1-.45-1-1V9h-1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V5c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1v1zM12 7H9a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" /></svg>;
  }

}