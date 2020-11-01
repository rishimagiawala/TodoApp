import React, {useState} from 'react';
import './TodoItem.css';


function TodoItem(props){
const[style, setStyle] = useState({textDecoration: "line-through"})
const [checked, setCheck] = useState(false)

function selfDestruct(){

  props.deleteTodo(props.item.id)

}

function addLine(){
setCheck((prevState)=>!prevState)

}

return(
<div class="box">
  <article>
    
    
  <div class= "level is-mobile">
    <div class="level-right">
  <label class="checkbox level-item">
  <input checked={checked} onChange={addLine} type="checkbox" className="check is-large"/>
  <p style={checked? style : null} class="tag is-rounded description subtitle is-4">{props.item.task}</p>
</label>
</div>
<div class="level-left">
<a onClick={selfDestruct} class="delete is-large level-item"></a>
</div>
  </div>
  
  </article>
</div>


)


}


export default TodoItem

