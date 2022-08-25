
import './App.css';
import TodoList from './todo/TodoList';
import TodoForm from './todo/TodoForm';
import TodoFooter from './todo/TodoFooter';
import { useReducer } from 'react';
import UssEffectComponent from './UseEffect/UseEffectComponent';
import UseMemoComponent from './UseMemo/UseMemo';
import UseImperativeHandle from './newHooks/UseImperativHandleComponent';
import UseLayoutEffect from './newHooks/UseLayoutEffect';


function reducer(state: any, action: any) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false
      }
     ]
  }
  if (action.type === 'delete') {
    return state.filter((t:any) => t.id !== action.payload.id)
  }
  if (action.type === 'edit-todo') {
    return state.map((todo: any) => {
      if (todo.id === action.payload.newTodo.id) {
        return action.payload.newTodo;
      } else {
        return todo;
      }
    })
  } 
  if (action.type === 'cleare-checked-todo') {
    return state.filter((todo: any) => !todo.isCompleted);
  }
}

const App:React.FC = () => {
   
 const [todos, dispatch] = useReducer(reducer, [
  {
    id: Math.random(),
    text: 'Learn JS',
    isCompleted: false
  },
  {
    id: Math.random(),
    text: 'Learn JS',
    isCompleted: false
  },
  {
    id: Math.random(),
    text: 'Learn JS',
    isCompleted: false
  }
])

return (
  <div className="App">
    <h2>useState, useReducer</h2>
    <TodoForm 
      onAdd={(text: any) => {
        dispatch({
          type: "add",
          payload: {
            text: text
          }
        })
      }}
    />
    <TodoList 
       todos={todos}
        onChange={(newTodo: any) => {
          dispatch({
            type: 'edit-todo',
            payload: {
              newTodo: newTodo
            }
          })
        }}
       onDelete={(todo: any) => {
        dispatch({
          type: "delete",
          payload: {
            id: todo.id
          }
        })
       }}
    />
    <TodoFooter 
       todos={todos}
        cleareCompleted={() => {
           dispatch({
            type: 'cleare-checked-todo'
           })
        }}
    />
    <br></br>
    <h2>useEffect, useContext</h2>
    <UssEffectComponent />
    <br></br>
    <h2>useMemo, useRef, useCallback</h2>
    <UseMemoComponent />
    <br />
    <h2>UseImperativHandle</h2>
    <UseImperativeHandle />
    <br/>
    <h2>UseLayoutEffect</h2>
    <UseLayoutEffect />
  </div>
);
}

export default App;



