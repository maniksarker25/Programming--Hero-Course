import logo from "./logo.svg";
import "./App.css";

const singers = [
  {name:'AmerJit',Job:'Cenima'},
  {name:'Sourov',Job:'Zee bangla'},
  {name:'Prianka',Job:'Start jolsa'},
  {name:'Moanli',Job:'Sony max'}
]

function App() {
  const nayoks = ['Bapparez', 'Sakib khan', 'Riaz','Salman Shah','Amit Hasan']
  return (
    <div className="App">
      {
        nayoks.map(nayok =><Person name={nayok}></Person>)
      }
       <h1>Singers</h1>
      {
        singers.map(singer =><Singer name={singer.name}></Singer>)
      }
      {/* <Person name="Rubel" nayika="Mousumi"></Person>
      <Person name="Bapparez" nayika="Sabnur"></Person> */}
      <h1>Fried List</h1>
      <Friend name="Ajay Devgun" phone="0147554141"></Friend>
      <Friend name='Raju Mia' phone='018412544'></Friend>
      <Friend name='Hasib Sarker' phone="0175851527"></Friend>
     
      {/* <Singer name="AmerJit"></Singer> */}
      
    </div>
  );
}
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props){
  // console.log(props)
  return(
    <div className="singer">
      <h1>Name:{props.name}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
function Singer(props){
  return(
    <div className="friend">
      <h1>{props.name}</h1>
    </div>
  )
}
export default App;
