import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = [];

function App() {
  const [Expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };






  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = Expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item
        });
        setExpenses(tempExpenses);
        setEdit(false)
        handleAlert({ type: "success", text: "item Edited" });

      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...Expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      setAmount("");
      setCharge("");

    } else {
      handleAlert({
        type: "danger",
        text: `Charge can't be empty value and amount value has to be greater than zero`,
      });
    }
  };

  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All item deleted" });
  };

  const handleDelete = (id) => {
    let tempExpenses = Expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  const handleEdit = id => {
    let expense = Expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };


  return (
    <div className=" w-[50%] m-auto mt-20">
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1 className="w-full text-center text-3xl font-bold text-gray-700">Budget Calculator</h1>
      <main>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={Expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1 className="w-full text-center bg-slate-400 text-white text-3xl mt-10 py-1 rounded-[7px]">
        Total spending : ${" "}
        {Expenses.reduce((acc, curr) => {
          return (acc += parseInt(curr.amount));
        }, 0)}{" "}
      </h1>
    </div>
  );
}

export default App;
