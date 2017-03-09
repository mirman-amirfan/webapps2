import React from "react";

export default class SpongebobTrapRemix extends React.Component {
  render() {
    return (
      <iframe width="420" height="315" src={this.props.url} frameborder="0" allowfullscreen></iframe>
    );
  }
}
