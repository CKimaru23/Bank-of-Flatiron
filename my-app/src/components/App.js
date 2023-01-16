import React from "react";
import Account from "./Account";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment grey inverted">
        <h2>The Bank of Flatiron</h2>
      </div>
      <Account />
    </div>
  );
}

export default App;