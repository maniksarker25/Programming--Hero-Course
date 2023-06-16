
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './compnents/Header'

function App() {


  return (
    <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default App
