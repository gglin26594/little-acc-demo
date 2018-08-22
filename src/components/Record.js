import React, { Component } from "react";

class Records extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
      </tr>
    );
  }
}

export default Records;
