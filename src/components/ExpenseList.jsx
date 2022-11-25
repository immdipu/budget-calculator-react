import React from "react";
import ExpenseItems from "./ExpenseItems";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul>
        {expenses.map((expense) => {
          return <ExpenseItems key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.lenght > 0 && (
        <button>
          Clear expenses <MdDelete />{" "}
        </button>
      )}
    </>
  );
};

export default ExpenseList;
