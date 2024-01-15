import { useState, useEffect } from 'react';
import CollectExpenses from './components/CollectExpenses/CollectExpenses';
import FilterExpenses from './components/FilterExpenses/FilterExpenses';
import ListExpenses from './components/ListExpenses/ListExpenses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface FormValues {
  id: number;
  description: string;
  category: string;
  date: string;
  amount: number;
}

function App() {
  const [expenses, setExpenses] = useState<FormValues[]>([]);
  const [totals, setTotals] = useState<number>(0);
  const [filter, setFilter] = useState<string>('Filter by Category');

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    const amounts = expenses.map((expense) => expense.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    setTotals(total);
  }, [expenses]);

  const handleOnSubmit = (values: FormValues) => {
    const date = values.date.split('-');
    const newExpense = { ...values, date: `${date[1]}/${date[2]}/${date[0]}`, id: Date.now() };
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses([...JSON.parse(storedExpenses), newExpense]);
      localStorage.setItem('expenses', JSON.stringify([...JSON.parse(storedExpenses), newExpense]));
    } else {
      setExpenses([newExpense]);
      localStorage.setItem('expenses', JSON.stringify([newExpense]));
    }
    setFilter('Filter by Category');
  };

  const handleFilterExpenses = (event: { target: { value: string } }) => {
    setFilter(event.target.value);
    const storedExpenses = localStorage.getItem('expenses');
    if (event.target.value === 'Filter by Category') {
      setFilter('Filter by Category');
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      }
    } else {
      setFilter(event.target.value);
      if (!storedExpenses) {
        return;
      }
      const parsedExpenses = JSON.parse(storedExpenses);
      const filterExpenses = parsedExpenses.filter(
        (expense: { category: string }) => expense.category === event.target.value
      );
      setExpenses(filterExpenses);
    }
  };

  const handleRemoveExpense = (id: number, category: string) => {
    console.log('category --->', category);
    const storedExpenses = localStorage.getItem('expenses');
    if (!storedExpenses) {
      return;
    }
    if (category === 'Filter by Category') {
      const parsedExpenses = JSON.parse(storedExpenses);
      const newExpenses = parsedExpenses.filter((expense: { id: number }) => expense.id !== id);
      localStorage.setItem('expenses', JSON.stringify(newExpenses));
      setExpenses(newExpenses);
      setFilter(category);
      return;
    }
    const parsedExpenses = JSON.parse(storedExpenses);
    const newExpenses = parsedExpenses.filter((expense: { id: number }) => expense.id !== id);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
    const newExpensesByCategory = newExpenses.filter((expense: { category: string }) => expense.category === category);

    setExpenses(newExpensesByCategory);
    setFilter(category);
  };

  console.log('%c expenses --->', 'color:#1dad9b', expenses);
  return (
    <div className='container p-4'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <CollectExpenses handleOnSubmit={handleOnSubmit} />
      </div>
      <div className='row'>
        <FilterExpenses handleFilterExpenses={handleFilterExpenses} filter={filter} />
      </div>

      <div className='row '>
        <ListExpenses expenses={expenses} handleRemove={handleRemoveExpense} total={totals} category={filter} />
      </div>
      <div className='row'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
