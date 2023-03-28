import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog/Blog';
import Mobile from './components/Mobile/Mobile';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Blog></Blog>
      <Mobile></Mobile>
      <Todos></Todos>
    </div>
  );
}

export default App;
