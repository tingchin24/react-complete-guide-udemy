import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState(2021);

  const filterHandler = (year) => {
    setFilterYear(+year);
  };

  const filteredExpenses = items.filter((item) => item.date.getFullYear() === filterYear);

  // const filteredExpenses = () => {
  //   const filterResult = items.filter((item) => item.date.getFullYear() === filterYear);

  //   if (filterResult.length === 0) {
  //     return <p>No expenses found.</p>;
  //   }

  //   return filterResult.map((expense) => (
  //     <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id} />
  //   ));
  // };

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterHandler={filterHandler} selected={filterYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
