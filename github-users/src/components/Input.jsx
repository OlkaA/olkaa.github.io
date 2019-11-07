import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => this.props.updateData(this.state.value));
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search user..."
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
