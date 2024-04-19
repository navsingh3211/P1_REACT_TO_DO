import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../store/slices/TodoSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [todo,setTodo] = useState('');
  function onClickHandler(){
    dispatch(addTodo(todo));
    // console.log(todo,'data added value')
  }
  return (
    <>
      <h3>Create to do</h3>
      <input onChange={(e)=>setTodo(e.target.value)}type="text" placeholder='enter to do'/>
      <button onClick={onClickHandler}>add todo</button>
    </>
  )
}

export default Dashboard