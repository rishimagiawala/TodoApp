import React, {useState} from 'react';
import './CreateItem.css';
import './TodoItem.css';
function CreateItem(props){

const [description, setDescription] = useState("")

function updateDescription(element){
   
setDescription(element.target.value)

}

function sendData(){
props.updateTodos(description)
}

return(
<div class="box">
  <article>
    
    
  <div class= "level">
  <input value={description} onChange={updateDescription} name="title" className="createInput input" type="text" placeholder="Describe Your Task" />
<div class="level-left">
<i onClick={sendData} class="confirm level-item fa-3x fas fa-check-square"></i>



<i onClick={props.updateCreate} class="trash level-item fa-3x fas fa-trash-alt"></i>

</div>
  </div>
  
  </article>
</div>

)


}


export default CreateItem