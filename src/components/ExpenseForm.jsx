import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = () => {
  return (
    <form>
      <div>
        <div>
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
          />
        </div>
        <div>
          <label htmlFor="charge">amount</label>
          <input
            type="number"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
          />
        </div>
      </div>
      <button type="submit">
        Submit
        <MdSend />
      </button>
    </form>
  );
};

export default ExpenseForm;
