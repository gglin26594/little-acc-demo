import React, { Component } from "react";
import Record from "./Record";

import * as RecordsAPI from '../utils/RecordsAPI';

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
    RecordsAPI.getAll().then(
      response => this.setState({ records: response.data, isLoad: true })
    ).catch(
      err => this.setState({ error: err, isLoad: true})
    );
  }

  render() {
    const { error, records, isLoad } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
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
