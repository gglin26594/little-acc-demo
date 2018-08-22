import React, { Component } from 'react';
import Record from './Record';


class Records extends Component {
	constructor() {
		super();
		this.state = {
			records: [
				{"id":1, "date": "2018-01-08", "title": "income", "amount": 15},
				{"id":2, "date": "2018-01-18", "title": "salary", "amount": 1522}
			]
			
		}
	};

	  render() {
	    return (
	      <div>
	         <h2>Records</h2>
	      
		      <table className="table table-bordered">
		      	<thead> 
		      		<tr><td>Date</td>
		      			<td>Title</td>
		      			<td>Amount</td>
		      		</tr>
		      	</thead>
		      	<tbody>
		      		{this.state.records.map((record) => <Record record={record} />)}
		      		
		      	</tbody>
		      </table>
	      </div>
	    );
	  }
	}



export default Records;
