Bank Transactions Application

This React application allows users to view their recent bank transactions, add new transactions, and filter transactions by searching for specific terms.


Getting Started

Make sure you have Node.js and npm (Node Package Manager) installed on your computer.
Clone the repository and navigate to the project directory.
Run npm install to install all necessary dependencies.
Run npm start to start the development server. The application should automatically open in your browser at http://localhost:8001/.


Features

View a table of all transactions: The transactions are displayed in a table format, with columns for the transaction date, description, amount, and category.

Add a new transaction: Users can fill out and submit a form to add a new transaction. The new transaction will be added to the table, but is not persisted to the backend.

Filter transactions by description: Users can type into the search bar to filter the transactions displayed in the table. Only transactions with a description matching the search term will be shown.

Technologies Used

React
JavaScript
CSS


Note

The application is not connected to any backend and the transaction data is stored in a mock JSON file, the data is not persistent.
The filter function is case sensitive.
The new transaction does not have any validation or error handling.


Future Plans
Connect the application to a backend for data persistence.
Add validation and error handling for the new transaction form.
Add more filter options such as filtering by date or category.
Add pagination to handle large amount of data.


