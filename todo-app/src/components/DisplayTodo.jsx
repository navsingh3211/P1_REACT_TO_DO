import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {removeTodo} from '../store/slices/TodoSlice';

const DisplayTodo = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>{
    return state.todos;
  });
  function deleteHandler(todo){
    dispatch(removeTodo(todo));
  }
  // console.log(data,"data")
  return (
    <>
      <div>
        {
          data.map((todo)=>{
            return <li key={todo}>
              {todo}
              <button onClick={()=>deleteHandler(todo)}>delete</button>
            </li>
          })
        }
      </div>
    </>
  )
}

export default DisplayTodo