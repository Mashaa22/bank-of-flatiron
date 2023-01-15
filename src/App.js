import './App.css';
import Search from './components/Search';
import Table from './components/Table';

function AccountHolder() {
  return (
    <div>
      <br></br>
      <Search />
      <Table />
    </div>
  );
}

function App() {
  return (
    <>
    <br></br>
    <div className="text-center " >
            <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
          <br></br>
          <p> Welcome to the Bank of Flatiron, where you can trust us with all your financial data!</p>
        </div>
        <AccountHolder />
      </div>
      </>
  );
}

export default App;
