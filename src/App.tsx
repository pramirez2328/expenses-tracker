import CollectExpenses from './components/CollectExpenses/CollectExpenses';
import FilterExpenses from './components/FilterExpenses/FilterExpenses';
import ListExpenses from './components/ListExpenses/ListExpenses';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='container p-4'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <CollectExpenses />
      </div>
      <div className='row'>
        <FilterExpenses />
      </div>

      <div className='row'>
        <ListExpenses />
      </div>
      <div className='row'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
