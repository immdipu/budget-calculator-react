import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItems = ({ expense }) => {
  const { id, charge, amount } = expense;

  return (
    <li>
      <div>
        <span>{charge}</span>
        <span>${amount}</span>
      </div>
      <button>
        <MdEdit />
      </button>
      <button>
        <MdDelete />
      </button>
    </li>
  );
};

export default ExpenseItems;
