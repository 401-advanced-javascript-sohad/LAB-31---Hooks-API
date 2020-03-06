/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

function ToDo(){
  const [toDoList, setTodoList] = useState([]);
  const [toDo, setTodo] = useState('');
  const [difficulty, setDifficulty] = useState(0);
  const [status, setStatus] = useState('task incomplete');
  const [doneList, setDoneList] = useState([]);
  const [disable, setDisable] = useState('fixed');



/////////////////////////////////////////////////////////////////////////////////////////////////////////////



  const [coloring, setColor] = useState('green');
  const [coloring1, setColor1] = useState('green');
  const handelSubmit = e=>{
    setDisable('fixed');
    setStatus('task incomplete');
    e.preventDefault();
    e.target.reset();
    setTodoList([...toDoList, [toDo, difficulty, 'task incomplete']]);
  };




  /////////////////////////////////////////addTodo///////////////////////////////////////////////////////////////
 
 
  const addTodo = e =>{
    setTodo(e.target.value);
  };


/////////////////////////////////////////////addDifficulty///////////////////////////////////////////////////////


const addDifficulty = e =>{
    if (e.target.value < 0 || e.target.value > 5) return;
    else setDifficulty(e.target.value);
  };


  ///////////////////////////////////////////////useEffect/////////////////////////////////////////////////////

  useEffect(() => {
    if (toDoList.length >= 1 ) { document.title = status;}
    else document.title = `There Is No List!`;
  }, [toDoList]);


///////////////////////////////////////////////////completeTask///////////////////////////////////////////////////////

  const completeTask = e =>{
    console.log(e.target.title);
    if (e.target.title === 'task incomplete') {
      setDisable('none');
      e.target.title = 'task complete';
      setColor1('red');
      setDoneList([...doneList, [e.target.name, e.target.value, e.target.title]]);
      setStatus('complete');

    }
  };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  


  return(
    <main>
      <img id="img1" src="https://media1.tenor.com/images/1f729b628843b6e9739c5b708e5beb9f/tenor.gif?itemid=9979305" ></img>
      <form onSubmit={handelSubmit}>
        <input type='text' onChange={addTodo} placeholder='Type your task' requigreen/>
        <input type='number' onChange={addDifficulty} placeholder = 'Difficulty (1-5)' requigreen/>
        <button type='submit'>Add</button>
      </form>
      


      
      {toDoList.map((toDo,idx)=>{
          return (
            <div>
              <li style={{display:disable, color:coloring}} key={idx}>{toDo[0]}</li>
              <li style={{display:disable, color:coloring}} key={idx}>{toDo[1]}</li>
              <li style={{display:disable, color:coloring}} key={idx}>{toDo[2]}</li>

              <button  style={{display:disable, color:coloring}} name={toDo[0]} value={toDo[1]} title={toDo[2]} onClick={completeTask}>completed</button>
            </div>
          );
        })
      }
      


      
      {doneList.map((toDo,idx)=>{
          return (
            <div>
              <li style={{color:coloring1}} key={idx}>{toDo[0]}
              </li>
              <li style={{color:coloring1}} key={idx}>{toDo[1]}
              </li>
              <li style={{color:coloring1}} key={idx}>{toDo[2]}
              </li>
            </div>
          );
        })
      }
   


   
    </main>
  );
}

export default ToDo;