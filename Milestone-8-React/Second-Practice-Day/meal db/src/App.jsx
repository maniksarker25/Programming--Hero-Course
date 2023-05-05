import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Order from './components/Order/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App max-w-screen-xl mx-auto">
      <Header></Header>
      <Order></Order>
    </div>
  )
}

export default App
