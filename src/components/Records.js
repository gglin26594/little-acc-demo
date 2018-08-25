import React, { Component } from "react";
import Record from "./Record";
import RecordForm from "./RecordForm";

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

  addRecord(record) {
    this.setState({
      records: [...this.state.records, record],
      error: null,
      isLoad: true
    });
  }

  updateRecord(record, data) {
    const recordIndex = this.state.records.indexOf(record);
    const newRecords = this.state.records.map((item, index) => {
      if (index !== recordIndex) {
        return item;
      }
      return {
        ...item,
        ...data
      };
    });
    this.setState({
      records: newRecords
    });
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
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <Record
                key={record.id}
                record={record}
                handleEditRecord={this.updateRecord.bind(this)}
              />
            ))}
          </tbody>
        </table>
      );
    }

    return (
      <div>
        <h2>Records</h2>
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
        {recordsComponent}
      </div>
    );
  }
}
