import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Light from './components/Light/Light'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Light />
    </div>
  )
}

export default App
