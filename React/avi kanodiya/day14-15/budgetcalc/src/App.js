import React, { useState } from 'react'
import ExpenseList from './Components/ExpenseList'
import ExpenseForm from './Components/ExpenseForm'
import Alert from './Components/Alert'
import Clear from './Components/Clear'
import TotalExpense from './Components/TotalExpense'
import { v4 as uuidv4 } from 'uuid';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'

// const initialExpenses = [
//   { id: uuidv4(), charge: "rent", amount: 1600 },
//   { id: uuidv4(), charge: "car payment", amount: 400 },
//   { id: uuidv4(), charge: "credit card bill", amount: 1200 }
// ]
const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem("expenses")) : [];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState();
  const [alert, setAlert] = useState({ state: false })
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState()
  localStorage.setItem('expenses', JSON.stringify(expenses))
  const chargeHandler = (e) => {
    setCharge(e.target.value)
  }

  const amountHandler = (e) => {
    setAmount(e.target.value)
  }
  console.log(expenses);
  const submitHandler = () => {
    if (charge !== "" && amount > 0) {
      if (edit) {
        expenses.forEach((expense) => {
          if (expense.id == id) {
            expense.charge = charge
            expense.amount = parseInt(amount)
          }
        })
        console.log(expenses);
        setEdit(false)
      } else {
        let item = {
          id: uuidv4(),
          charge: charge,
          amount: parseInt(amount)
        }
        setExpenses([...expenses, item])
        alertHandler({ type: 'success', text: 'item added' })
        setTimeout(() => {
          console.log(expenses);

        }, 3000);

      }

    } else {
      if (charge === '' && amount === 0) {
        alertHandler({ type: 'danger', text: 'Charge and Amount can not be Empty!!!' })
      } else if (charge === '') {
        alertHandler({ type: 'danger', text: 'Charge can not be empty!!!' })
      } else if (amount === 0) {
        alertHandler({ type: 'danger', text: 'amount can not be empty or zero!!!' })
      }
    }
  }

  const alertHandler = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }

  const clearHandler = () => {
    setExpenses([])
  }

  const deleteHandler = (id) => {
    const filteredValue = expenses.filter(item => { return item.id !== id })
    setExpenses(filteredValue)
  }

  const editHandler = (id) => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setId(id)
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    console.log(expense);
  }
  return (
    <>
      {alert.show && <Alert setAlert={setAlert} type={alert.type} text={alert.text} />}
      <div className='container mt-5'>
        <div class="card text-center">
          <ExpenseForm chargeHandler={chargeHandler} amountHandler={amountHandler} submitHandler={submitHandler} charge={charge} amount={amount} edit={edit} />
          <ExpenseList deleteHandler={deleteHandler} expenses={expenses} editHandler={editHandler} />
          <Clear clearHandler={clearHandler} />
        </div>
      </div>
      <TotalExpense expenses={expenses} />
    </>
  )
}

export default App
