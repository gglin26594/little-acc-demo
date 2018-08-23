import React, { Component } from "react";

export default class RecordForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Date"
              name="date"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              name="Amount"
            />
          </div>
          <button type="submit" className="btn btn-primary"> Create Record</button>
        </form>
      </div>
    );
  }
}
