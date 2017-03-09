import React from "react";

export default class SpongebobTrapRemix extends React.Component {
  constructor(props) {
    super(props); //makes props a react thing
    this.state = {
      count: 0
    }
  }

  add() {
    this.setState({
      count: this.state.count + 1
    })
  }

  subtract() {
    count: this.set.state - 1
  }

  render() {
    return (
      <div>
        <button onClick={this.add.bind(this)}>+</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.subtract.bind(this)}>-</button>
      </div>
    );
  }
}
