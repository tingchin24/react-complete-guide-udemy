import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function onTitleChange(e) {
    if (e.target.value) {
      setTitle(e.target.value);
    }
  }

  function onAmountChange(e) {
    if (e.target.value) {
      setAmount(e.target.value);
    }
  }

  function onDateChange(e) {
    if (e.target.value) {
      setDate(e.target.value);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    if (title.trim() && amount.trim() && date.trim) {
      const newExpense = {
        title,
        amount: +amount,
        date: new Date(date),
      };
      props.onNewExpense(newExpense);
      setTitle("");
      setAmount("");
      setDate("");
    }
  }

  return (
    <form type="submit" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChange} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={onAmountChange} value={amount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={onDateChange} value={date} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
