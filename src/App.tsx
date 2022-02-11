import "./App.css";
import Expenses from "./pages/Expenses";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ExpenseDetails from "./pages/ExpenseDetails";
import DailyExpensesForm from "./pages/DailyExpensesForm";
import ExpenseForm from "./pages/ExpenseForm";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Expenses />} />
            <Route path="/expense-details" element={<ExpenseDetails />} />
            <Route
              path="/daily-expenses-form"
              element={<DailyExpensesForm />}
            />
            <Route path="/expense-form" element={<ExpenseForm />} />
          </Routes>
          <ul>
            <li>
              <Link to="/">Expenses</Link>
            </li>
            <li>
              <Link to="/expense-details">ExpenseDetails</Link>
            </li>
            <li>
              <Link to="/daily-expenses-form">DailyExpensesForm</Link>
            </li>
          </ul>
        </Router>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
