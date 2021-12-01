import React from 'react'
import { name, age, person } from './data'
import Greeting from './Greeting'
import StudentIDCard from './StudentIDCard'

const Para = <p>Student Details</p>
const App = () => (
  <div>
    <p>hello world</p>
    <p>hello {name}</p>
    <p>age is : {age}</p>
    <p>{person.name}</p>
    <Greeting></Greeting>
    <StudentIDCard Para={Para}></StudentIDCard>
  </div>

)

export default App;