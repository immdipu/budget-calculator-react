import React from "react";
import ExpenseItems from "./ExpenseItems";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <>
      <ul className="flex flex-col gap-5 mt-8">
        {expenses.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <div className="w-full mt-10 flex justify-center">
          <button
            onClick={clearItems}
            className=" bg-red-200 text-center text-xl px-2 text-red-500 hover:text-red-900 items-center flex justify-center rounded-md py-1"
          >
            Clear expenses <MdDelete />
          </button>
        </div>
      )}
    </>
  );
};

export default ExpenseList;
