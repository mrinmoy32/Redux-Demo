import { useState } from 'react'
import Progressbar from './Progressbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Progressbar />
    </>
  )
}

export default App
