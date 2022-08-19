import React, { useState } from 'react';
import {db} from './config';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import './Form.css'

const FireBase = () => {

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

  const Create = () => {
    const myDoc = doc(db, "MyCollection", "no")

    const docData = {
        "task": "yes"
    }

    if(tasks !== "") {
      setDoc(myDoc, docData)
      .then (() => {
        alert("Document Created")  
    })
    .catch ((error) => {
      alert(error.message)
  })
    } else {
      alert("Document Empty")  
    }  
  }

  console.log(tasks)

  const Read = () => {
    const myDoc = doc(db, "MyCollection", "newDocument")

    getDoc(myDoc)
    
    .then ((snapshot) => {
      if(snapshot.exists) {
        setTasks(snapshot.data())
      } else {
        alert("No Document Found")
      }
    })
    .catch ((error) => {
        alert(error.message)
    })
  }

//   const Update = (value,merge) => {
//     const myDoc = doc(db, "MyCollection", "newDocument")

//     setDoc(myDoc,value,{merge: merge})
//     .then (() => {
//         alert("Update Succesful")
//         setUpdateItem('')
//     })
//     .catch ((error) => {
//         alert(error.message)
//     })
  


  const Delete = () => {
    const myDoc = doc(db, "MyCollection", "newDocument")

    deleteDoc(myDoc)
    .then (() => {
      alert("Delete Succesful")
  })
  .catch ((error) => {
      alert(error.message)
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
                 Add
            </button>
            <button 
            onClick={Create}
            className='buton'>
                 Create
            </button>
            <button 
            onClick={Read}
            className='buton'>
                 Read
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
    );
}

export default FireBase