import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M15.991 3.02l-4.438.916c-.593.123-.747.865-.276 1.336l1.02 1.02-2.145 2.145h-4.42a.997.997 0 0 0-.707.293l-3.732 3.732A.999.999 0 0 0 2 14.17c.265 0 .52-.105.707-.293l3.439-3.439h4.42c.266 0 .52-.105.707-.293l2.438-2.438 1.02 1.02c.471.471 1.213.318 1.336-.276l.916-4.438c.119-.578-.415-1.112-.992-.993z" /></svg>;
  }

}