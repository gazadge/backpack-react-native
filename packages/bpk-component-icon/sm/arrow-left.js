import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M14 2.5v13.1c0 1.3-1.5 1.9-2.4 1.1l-7.1-6.6c-.7-.6-.7-1.6 0-2.2l7.1-6.5c.9-.9 2.4-.2 2.4 1.1z" /></svg>;
  }

}