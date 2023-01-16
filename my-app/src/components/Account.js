import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import Search from "./Search";
import TransactionForm from "./TransactionForm";

function Account() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + query)
      .then((response) => response.json())
      .then(transaction => setTransaction(transaction))
  }, [query])

  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <TransactionForm />
      <Transactions transactions={transaction} />
    </div>
  );
}

export default Account;