import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuid } from 'uuid'

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 }]


function App() {
  const [Expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main>
        <ExpenseForm />
        <ExpenseList expenses={Expenses} />
      </main>
      <h1>Total spending : {Expenses.reduce((acc, curr) => { return acc += curr.amount }, 0)} </h1>
    </>
  );
}

export default App;
