import React from "react";
import Transaction from "./Transaction";

function Transactions({transactions}) {
  const list = transactions.map((data)=>{
    return <Transaction key={data.id} date={data.date} description={data.description} category={data.category} amount={data.amount} />;
  })
  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {list}
      </tbody>
    </table>
  );
}

export default Transactions;