import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  const [value, setValue] = useState(0)
  const [size, setSize] = useState(window.innerWidth)
  

  useEffect(() => {
    if (value > 0) {
      console.log('call useEffect');
      document.title = `New Messages(${value})`
    }
  }, [value])

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('resize useEffect');
    window.addEventListener('resize', checkSize)
    // return () => {
    //   console.log('cleanup');
    //   window.removeEventListener('resize', checkSize)
    // }
  }, [])
  console.log('render');
  return (
    <>
      <h1>{value}</h1>
      <Button onClick={() => setValue(value + 1)}>Click</Button>
      <div className='mt-5'>
        <h1>Window : {size}px</h1>
      </div>
    </>
  )
}

export default App
