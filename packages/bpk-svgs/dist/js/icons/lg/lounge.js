import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M6 11.537V13h12v-1.463c0-1.178.86-2.163 2-2.39v-.171A.991.991 0 0 0 19 8H5c-.55 0-1 .439-1 .976v.171c1.14.227 2 1.212 2 2.39zM20.5 10c-.338 0-.647.117-.898.308l-.007.005a1.489 1.489 0 0 0-.307.312l-.007.009a1.49 1.49 0 0 0-.189.368l-.025.079A1.493 1.493 0 0 0 19 11.5V14H5v-2.5a1.5 1.5 0 0 0-1-1.407A1.46 1.46 0 0 0 3.5 10c-.825 0-1.5.675-1.5 1.5V16c0 .55.45 1 1 1h2v1.875c0 .55.45 1 1 1s1-.45 1-1V17h10v1.875c0 .55.45 1 1 1s1-.45 1-1V17h2c.55 0 1-.45 1-1v-4.5c0-.825-.675-1.5-1.5-1.5z" /></svg>;
  }

}