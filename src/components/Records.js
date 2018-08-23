import React, { Component } from "react";
import Record from "./Record";
import RecordForm from './RecordForm'

import * as RecordsAPI from "../utils/RecordsAPI";

export default class Records extends Component {
  constructor() {
    super();
    this.state = {
      records: [],
      error: null,
      isLoad: false
    };
  }

  componentDidMount() {
    RecordsAPI.getAll()
      .then(response => this.setState({ records: response.data, isLoad: true }))
      .catch(err => this.setState({ error: err, isLoad: true }));
  }

  render() {
    const { error, records, isLoad } = this.state;
    let recordsComponent;
    if (error) {
      recordsComponent = <div>Error: {error.message} </div>;
    } else if (!isLoad) {
      recordsComponent = <div>Loading...</div>;
    } else {
      recordsComponent = (
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
      );
    }

    return (
      <div>
        <h2>Records</h2>
        <RecordForm />
        {recordsComponent}
      </div>
    );
  }
}


