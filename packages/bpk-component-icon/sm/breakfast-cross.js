import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M2 14h14v.4c0 .884-.627 1.6-1.4 1.6H3.4c-.773 0-1.4-.716-1.4-1.6V14zm15-8.638V7.66a3.328 3.328 0 0 1-3.01 3.306C13.939 12.095 12.729 13 11.47 13H6.53C5.243 13 4 12.057 4 10.894V3h10v1h1.438C16.301 4 17 4.499 17 5.362zM10.053 8l1.838-1.838a.372.372 0 0 0 0-.526l-.526-.526a.372.372 0 0 0-.526 0L9 6.947 7.162 5.109a.372.372 0 0 0-.526 0l-.527.526a.372.372 0 0 0 0 .526L7.947 8 6.109 9.838a.372.372 0 0 0 0 .526l.526.526a.372.372 0 0 0 .526 0L9 9.053l1.838 1.838a.372.372 0 0 0 .526 0l.526-.526a.372.372 0 0 0 0-.526L10.053 8zM16 5.362c0-.315-.352-.362-.562-.362H14v4.966a2.337 2.337 0 0 0 2-2.305V5.362z" /></svg>;
  }

}