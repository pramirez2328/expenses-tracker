import CollectExpenses from './components/collectExpenses/CollectExpenses';
import FilterExpenses from './components/filterExpenses/FilterExpenses';
import ListExpenses from './components/listExpenses/ListExpenses';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <CollectExpenses />
      <FilterExpenses />
      <ListExpenses />
      <Footer />
    </div>
  );
}

export default App;
