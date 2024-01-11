import { useState } from 'react';
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
  const [expenses, setExpenses] = useState<FormValues[]>(existingExpenses);

  const handleOnSubmit = (values: FormValues) => {
    const date = values.date.split('-');
    setExpenses([...expenses, { ...values, date: `${date[1]}/${date[2]}/${date[0]}`, id: expenses.length + 1 }]);
  };

  const handleRemoveExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='container p-4'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <CollectExpenses handleOnSubmit={handleOnSubmit} />
      </div>
      <div className='row'>
        <FilterExpenses />
      </div>

      <div className='row'>
        <ListExpenses expenses={expenses} handleRemove={handleRemoveExpense} />
      </div>
      <div className='row'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
