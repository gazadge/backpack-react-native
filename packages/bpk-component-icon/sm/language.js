import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M16.3 3.8c-.2-.2-.4-.3-.4-.3-.7-.3-3.8-.5-6.9-.5s-6.2.2-6.8.5c0 0-.3.1-.4.3C1.2 4.2 1 6.1 1 8s.2 3.8.7 4.2c.2.2.4.3.4.3.4.2 1.5.3 2.9.4v1.7c0 .3.3.5.5.4.7-.2 1.9-.8 2.9-2h.5c3.1 0 6.2-.2 6.8-.5 0 0 .3-.1.4-.3.7-.4.9-2.3.9-4.2s-.2-3.8-.7-4.2zM5 8.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .5-.4.9-1 1zm4.9-.5c-.2.3-.5.5-.9.5-.6 0-1-.4-1-1s.4-1 1-1c.2 0 .5.1.6.2.3.2.4.5.4.8 0 .2 0 .3-.1.5zm3.1.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" /></svg>;
  }

}