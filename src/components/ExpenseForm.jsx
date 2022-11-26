import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-7 flex flex-col">
      <div className="flex justify-center gap-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="charge" className="uppercase text-gray-700">
            Charge
          </label>
          <input
            className="outline-none border-b-2"
            type="text"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="charge" className="uppercase text-gray-700">
            Amount
          </label>
          <input
            className="outline-none border-b-2"
            type="number"
            id="charge"
            name="charge"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <button
          type="submit"
          className="flex justify-center items-center bg-gray-300 text-xl px-2 py-1 rounded-sm text-gray-800 hover:text-black gap-2"
        >
          {edit ? "Edit" : "Submit"}
          <MdSend />
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
