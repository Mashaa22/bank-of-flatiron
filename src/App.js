import './App.css';
import Search from './components/Search';

function AccountHolder() {
  return (
    <div>
      <Search />
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
        </div>
        <AccountHolder />
      </div>
      </>
  );
}

export default App;
