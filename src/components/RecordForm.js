import React, { Component } from "react";

export default class RecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      amount: ""
    };
  }

  valid() {
    return this.state.date && this.state.title && this.state.amount;
  }

  handleChange(event) {
    let name, obj;
    name = event.target.name;
    this.setState((obj = {}, obj["" + name] = event.target.value, obj));
  }

  render() {
    return (
      <div>
        <form className="form-inline  mb-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control mr-1"
              placeholder="Date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange.bind(this)}
            />
            <input
              type="text"
              className="form-control  mr-1"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
            />
            <input
              type="text"
              className="form-control  mr-1"
              placeholder="Amount"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.valid()}
          >
            
            Create Record
          </button>
        </form>
      </div>
    );
  }
}
