import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Countries></Countries>
     <Person></Person>
    </div>
  );
}
/* 
function LoadCountries(){
  const [countries,setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h1>Visiting Every Country In The World!!!</h1>
      {
        countries.map(country =><Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
function Country(props){
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Population: {props.population}</h3>
    </div>
  )
} */

export default App;
