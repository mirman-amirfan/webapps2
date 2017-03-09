import React from "react";

export default class NameField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		}
	}

  changeHandler(e) {
    this.setSate({
      name: e.target.value1
    })
  }

  render() {
    return (
      <input type="text"
      defaultValue={this.state.name}
      onChange={this.changeHandler.bind(
        this
      )}/>
    )
  }
}
