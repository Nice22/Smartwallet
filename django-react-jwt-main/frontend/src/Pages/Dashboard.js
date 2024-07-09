// frontend/src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ title: '', amount: 0, date: '' });

  useEffect(() => {
    axios.get('/api/expenses/')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/expenses/create/', newExpense)
      .then(response => {
        setExpenses([...expenses, response.data]);
        setNewExpense({ title: '', amount: 0, date: '' });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={newExpense.title} onChange={(event) => setNewExpense({ ...newExpense, title: event.target.value })} />
        </label>
        <label>
          Amount:
          <input type="number" value={newExpense.amount} onChange={(event) => setNewExpense({ ...newExpense, amount: event.target.value })} />
        </label>
        <label>
          Date:
          <input type="date" value={newExpense.date} onChange={(event) => setNewExpense({ ...newExpense, date: event.target.value })} />
        </label>
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.title} - {expense.amount} - {expense.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;