import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItems = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;

  return (
    <li className="flex w-full bg-slate-200 justify-between rounded-sm px-2 py-1">
      <div className="full flex w-full justify-around">
        <span className="text-2xl text-gray-800">{charge}</span>
        <span className="text-2xl text-gray-800">${amount}</span>
      </div>
      <div className="w-[20%] flex gap-5">
        <button
          onClick={() => handleEdit(id)}
          className="text-2xl text-gray-800"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="text-2xl text-gray-800"
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItems;
