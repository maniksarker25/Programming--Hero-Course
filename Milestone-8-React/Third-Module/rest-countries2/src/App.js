import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
