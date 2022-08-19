import React, {useState} from 'react'
import './Form.css'

const Form = () => {
    const [item, setItem] = useState("");
    const [tasks, setTasks] = useState([]);
    

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const itemTask = () => {
        setTasks((oldTasks) => {
            return [ ...oldTasks, item]
        })
    }

  return (
    <div className="form">
        <form>
        <input
            className='input'
          type="text" 
          placeholder = "Add New Task"
          onChange={itemEvent}
        />
        <button 
        onClick={itemTask}
        className='buton'>
             + 
        </button>
    </form>


    <ol>

    {
        tasks.map((b) => {
            return (
                <li>{b}</li>
            )
        })
    }
    </ol>

    {console.log(tasks)}

    </div>
  )
}

export default Form