import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M14.841 3.492a3.963 3.963 0 0 0-5.605 0L2.831 9.898a2.831 2.831 0 0 0 4.003 4.003l6.405-6.405a1.699 1.699 0 0 0-2.402-2.402l-6.405 6.405a.567.567 0 0 0 .801.801l6.405-6.405a.567.567 0 0 1 .801.801l-6.405 6.405a1.699 1.699 0 0 1-2.402-2.402l6.405-6.405a2.831 2.831 0 0 1 4.003 4.003l-6.405 6.405a.567.567 0 0 0 .801.801l6.405-6.405a3.966 3.966 0 0 0 0-5.606z" /></svg>;
  }

}