import React, { Component } from "react";
import Record from "./Record";
import { getJSON } from "jquery";

class Records extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
      error: null,
      isLoad: false
    };
  }

  componentDidMount() {
    getJSON("https://5b7de398adf2070014bfa2e5.mockapi.io/api/v1/records").then(
      response => this.setState({ records: response, isLoad: true }),
      err => this.setState({ error: err })
    );
  }

  render() {
    const { error, records, isLoad } = this.state;
    if (error) {
      return <div>Error: {error.responseText} </div>;
    } else if (!isLoad) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h2>Records</h2>

          <table className="table table-bordered">
            <thead>
              <tr>
                <td>Date</td>
                <td>Title</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <Record key={record.id} {...record} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Records;
