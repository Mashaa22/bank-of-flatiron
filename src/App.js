import './App.css';
import Search from './components/Search';
import Table from './components/Table';
import Form from './components/Form';

function AccountHolder() {
  return (
    <div>
      <br></br>
      <Search />
      <Form />
      <Table />
    </div>
  );
}

function App() {

  return (
    <div className='container'>
    <br></br>
    <div className="text-center " >
            <div className="">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountHolder />
      </div>
     </div>
  );
}

export default App;
