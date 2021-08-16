import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const onCancelHandler = () => setShowForm(false);

  return (
    <div className="new-expense">
      {!showForm && <button onClick={() => setShowForm(true)}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm onNewExpense={(newExpense) => props.onAddExpense(newExpense)} onCancel={onCancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
