import React, { useEffect, useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState(2021);
  const [filterResult, setFilterResult] = useState([]);

  const filterHandler = (year) => {
    setFilterYear(+year);
  };

  useEffect(() => {
    if (filterYear) {
      setFilterResult(items.filter((item) => item.date.getFullYear() === filterYear));
    }
  }, [filterYear, items]);

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterHandler={filterHandler} selected={filterYear} />
      {filterResult.map((expense) => (
        <ExpenseItem date={expense.date} title={expense.title} amount={expense.amount} key={expense.id} />
      ))}
    </Card>
  );
};

export default Expenses;
