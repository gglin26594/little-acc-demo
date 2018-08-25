import React, { Component } from "react";
import * as RecordAPI from "../utils/RecordsAPI";

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

  handleSubmit(event) {
    event.preventDefault();
    RecordAPI.create(this.state).then(
        response => {
          this.props.handleNewRecord(response.data);
          this.setState({
            date: "",
            title: "",
            amount: ""
          }); 
        }
    ).catch(
        err => console.log(err.message)
    );
  }

  render() {
    return (
      <div>
        <form className="form-inline  mb-3" onSubmit={this.handleSubmit.bind(this)}>
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
