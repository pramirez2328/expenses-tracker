import { useState, useEffect } from 'react';
import CollectExpenses from './components/CollectExpenses/CollectExpenses';
import FilterExpenses from './components/FilterExpenses/FilterExpenses';
import ListExpenses from './components/ListExpenses/ListExpenses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { existingExpenses } from './util/getExistingExpenses';
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

  useEffect(() => {
    const storedExpenses = localStorage.getItem('expenses');
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    } else {
      setExpenses(existingExpenses);
    }
  }, []);

  useEffect(() => {
    const amounts = expenses.map((expense) => expense.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    setTotals(total);
  }, [expenses]);

  const handleOnSubmit = (values: FormValues) => {
    const date = values.date.split('-');
    const newExpense = [...expenses, { ...values, date: `${date[1]}/${date[2]}/${date[0]}`, id: expenses.length + 1 }];
    setExpenses(newExpense);
    localStorage.setItem('expenses', JSON.stringify(newExpense));
  };

  const handleRemoveExpense = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  const handleFilterExpenses = (event: { target: { value: string } }) => {
    if (event.target.value === 'Filter by Category') {
      const storedExpenses = localStorage.getItem('expenses');
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      } else {
        setExpenses(existingExpenses);
      }
    } else {
      const filterExpenses = expenses.filter((expense) => expense.category === event.target.value);
      setExpenses(filterExpenses);
    }
  };

  return (
    <div className='container p-4'>
      <div className='row'>
        <Header />
      </div>
      <div className='row '>
        <CollectExpenses handleOnSubmit={handleOnSubmit} />
      </div>
      <div className='row'>
        <FilterExpenses handleFilterExpenses={handleFilterExpenses} />
      </div>

      <div className='row '>
        <ListExpenses expenses={expenses} handleRemove={handleRemoveExpense} total={totals} />
      </div>
      <div className='row'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
