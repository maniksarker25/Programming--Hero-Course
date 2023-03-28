import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>External Users</h1>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
      
    </div>
  )
}

function User(props){
  return(
    <div style={{border:'2px solid red',margin:'20px'}}>
      <h3>Name:{props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}
export default App;
