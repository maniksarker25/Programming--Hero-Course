import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:'Laptop',price:150000},
    {name:'iphone',price:50000},
    {name:'wathc',price:20000},
    {name:'tablet',price:50000}
]
  return (
    <div className="App">
      {/* <Product name='Laptop'price='45000'></Product>
      <Product name='Phone'price='15000'></Product> */}
      {
        products.map(product=><Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
