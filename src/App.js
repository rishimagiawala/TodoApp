import React, { useState , useReducer } from 'react'
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem.js'
import CreateItem from './CreateItem'

function App() {
  const [title, setTitle] = useState("")
  const[todos, setTodos] = useState([])
  const[create, setCreate]=useState(false)
  const[createButton, setCreateButton] = useState(true)
  const[todoID, setTodoID] = useState(0)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  function updateTitle(event) {

    setTitle(event.target.value)
    //console.log(title)

  }

  function updateTodos(description){

    updateCreate()
    setTodoID((prevState)=> prevState + 1)
    var tempTodos = todos

    tempTodos.push({task: description,
    id: todoID})

    setTodos(tempTodos)

    
 

  }

  function updateCreate(){
setCreate(!create)
setCreateButton(!createButton)


  }

function deleteTodo(id){
//console.log(id)
const tempTodos = todos

var searchTerm = id,
    index = 0;
for(var i = 0, len = tempTodos.length; i < len; i++) {
    if (tempTodos[i].id === searchTerm) {
        index = i;
        break;
    }
}
tempTodos.splice(index,1)

setTodos(tempTodos)

forceUpdate()

}

var todoList = todos.map(function(info){
  return <TodoItem deleteTodo={deleteTodo} key={info.id} item={info} />
})
console.log("yo")
  return (

    <div className="main container">
      <div className="level">
        <div className="level-item has-text-centered">
          <div class="column">
            <input onChange={updateTitle} value={title} name="title" className="todoTitle input" type="text" placeholder="Input Name of Todo List Here" />
            {todoList}
            {create ? <CreateItem updateCreate={updateCreate} updateTodos={updateTodos}/> : null}
           

           {createButton ? <button onClick={updateCreate} name="createButton" className="buttonDiv button is-success is-rounded is-medium">Add an Item</button> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
