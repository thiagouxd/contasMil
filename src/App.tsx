import "./App.css";
import Expenses from "./pages/Expenses";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ExpenseDetails from "./pages/ExpenseDetails";
import DailyExpensesForm from "./pages/DailyExpensesForm";
import ExpenseForm from "./pages/ExpenseForm";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import styled from "styled-components";

const firebaseConfig = {
  apiKey: "AIzaSyCJe_23TBqZCo9fYCeRSqBoKOaGP0W7p6k",
  authDomain: "contas-mil.firebaseapp.com",
  databaseURL: "https://contas-mil-default-rtdb.firebaseio.com",
  projectId: "contas-mil",
  storageBucket: "contas-mil.appspot.com",
  messagingSenderId: "480718251156",
  appId: "1:480718251156:web:0830d006c43242dc888081",
};

function App() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return (
    <Router>
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/expense-form">Adicionar novo</Link>
        </li>
      </List>
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="/expense-details" element={<ExpenseDetails />} />
        <Route path="/daily-expenses-form" element={<DailyExpensesForm />} />
        <Route path="/expense-form" element={<ExpenseForm />} />
      </Routes>
    </Router>
  );
}

export default App;

const List = styled.ul`
  display: flex;
  padding: 16px;
  margin-top: 0px;
  list-style: none;
  background: #333;
  li {
    margin-right: 16px;
    font-size: 16px;
    font-weight: bold;
    &:hover {
      opacity: 0.6;
    }
  }
`;
