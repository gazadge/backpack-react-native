import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M9 1C4.6 1 1 4.6 1 9s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.9 7H12c-.1-1.8-.4-3.4-.8-4.6 1.9.8 3.4 2.5 3.7 4.6zM8 10h2c-.1 2.2-.6 3.7-1 4.5-.4-.8-.9-2.3-1-4.5zm0-2c.1-2.2.6-3.7 1-4.5.4.8.9 2.3 1 4.5H8zM6.9 3.4C6.4 4.6 6.1 6.2 6 8H3.1c.3-2.1 1.8-3.8 3.8-4.6zM3.1 10H6c.1 1.8.4 3.4.8 4.6-1.9-.8-3.4-2.5-3.7-4.6zm8 4.6c.4-1.2.7-2.8.8-4.6h2.9c-.2 2.1-1.7 3.8-3.7 4.6z" /></svg>;
  }

}