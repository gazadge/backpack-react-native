import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M12.17 9.169a.5.5 0 0 1 .707 0l.693.693 2.005-2.005a1.462 1.462 0 0 0 0-2.062l-3.371-3.371a1.462 1.462 0 0 0-2.062 0L8.138 4.43l.694.694a.5.5 0 0 1-.708.707l-.694-.694-5.005 5.005a1.461 1.461 0 0 0 0 2.061l3.371 3.371c.57.567 1.492.567 2.062 0l5.005-5.005-.693-.693a.5.5 0 0 1 0-.707zm-3.467 3.353l-1.272-.016-.735 1.039a.31.31 0 0 1-.551-.087l-.378-1.215-1.215-.378a.31.31 0 0 1-.087-.551l1.039-.735-.016-1.273a.31.31 0 0 1 .497-.253l1.02.761 1.205-.409a.31.31 0 0 1 .394.395l-.409 1.205.761 1.02c.154.206.005.5-.253.497zm2.503-4.316a.502.502 0 0 1-.707 0l-.704-.704a.5.5 0 0 1 .707-.707l.704.704a.5.5 0 0 1 0 .707z" /></svg>;
  }

}