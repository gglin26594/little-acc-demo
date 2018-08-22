import React, { Component } from 'react';


class Records extends Component {
  render() {
    return (
      <div>
         <h2>Records</h2>
      
	      <table className="table table-bordered">
	      	<thead> 
	      		<tr><td>Date</td>
	      			<td>Title</td>
	      			<td>Amount</td></tr>
	      	</thead>
	      	<tbody>
	      		<tr>
	      			<td>2018-01-10</td>
	      			<td>Income</td>
	      			<td>25</td>
	      		</tr>

	      	</tbody>
	      </table>
      </div>
    );
  }
}

export default Records;
