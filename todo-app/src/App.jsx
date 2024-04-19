import { useState } from 'react';
import './App.css';
import Dashboard from '../../todo-app/src/components/Dashboard';
import Navbar from '../../todo-app/src/components/Navbar';
import DisplayTodo from '../../todo-app/src/components/DisplayTodo';

export default function App() {
  // let [count, setCount] = useState(0)
  // setCount(5)
  // count = count +1
  // console.log(count,'count')
  return (
    <>
      <Navbar/>
      <DisplayTodo/>
      <Dashboard/>
    </>
  )
}
