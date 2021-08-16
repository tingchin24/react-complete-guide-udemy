import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={(newExpense) => props.onAddExpense(newExpense)} />
    </div>
  );
};

export default NewExpense;
