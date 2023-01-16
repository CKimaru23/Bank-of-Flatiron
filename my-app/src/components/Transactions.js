import React from "react";
import Transaction from "./Transaction";

function Transactions({transactions}) {

  function deletes(){
    return(
      <button className="ui red button" type="submit">
          Deletes
      </button>
    )
  }
  const list = transactions.map((data)=>{
    return <Transaction key={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount} />;
  })
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center blue aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center blue aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center blue aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center blue aligned header">Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned red header">Delete</h3>
          </th>
        </tr>
        {list}
        {deletes}
      </tbody>
    </table>
  );
}

export default Transactions;