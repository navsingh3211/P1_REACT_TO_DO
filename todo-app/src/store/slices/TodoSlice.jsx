import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name:"todo",
  initialState:[],
  reducers:{
    addTodo(state,action){
      state.push(action.payload);
      // console.log(action.payload,'action.payload')
    },
    removeTodo(state,action){
      // console.log(action.payload,'action.payload')
      let indexToRemove = state.indexOf(action.payload);
      // console.log(indexToRemove,'indexToRemove')
      state.splice(indexToRemove,1);
    }
  }
});

export default todoSlice.reducer;

export const {addTodo,removeTodo} = todoSlice.actions;