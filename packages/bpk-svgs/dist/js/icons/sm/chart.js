import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M3 5c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1 .5 0 1-.4 1-1V6c0-.6-.4-1-1-1zm4-3c-.6 0-1 .4-1 1v12c0 .5.4 1 1 1 .5 0 1-.4 1-1V3c0-.6-.4-1-1-1zm8 8c-.6 0-1 .4-1 1v4c0 .5.4 1 1 1 .5 0 1-.4 1-1v-4c0-.6-.4-1-1-1zm-3.9-4c-.6 0-1 .4-1 1v8c0 .5.4 1 1 1 .5 0 1-.4 1-1V7c0-.6-.5-1-1-1z" /></svg>;
  }

}