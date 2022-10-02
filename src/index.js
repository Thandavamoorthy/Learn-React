// import React, { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'
// import SignUpForm from './SignUpForm';
import SendMail from './SendMail';


// const AddTask = ({addTask}) => {
//   const [value,updateValue] = useState("");
 
//   const handleSubmit = e => {
//     e.preventDefault();
//     if(value !=="")
//     {
//       addTask(value)
//       updateValue("");
//     }
//   };
//   return(
//     <form onSubmit={handleSubmit}>
//     <input type="text" 
//     value={value}
//     placeholder="Enter your task todo" 
//     onChange={e => updateValue(e.target.value)}/>
//     <button type="submit"><i class="fa-duotone fa-plus"></i></button>
//     </form>
//     );
//   };
    
// const ToDoList = () => {
//   const addTask = text => updateTask([...tasks,{text}]);
//   const [tasks, updateTask] = useState([
//     {
//       text: "Wake Up",
//       isCompleted: false
//     },
//     {
//       text: "Fresh Up",
//       isCompleted: false
//     },
//     {
//       text: "Boost Up",
//       isCompleted: false
//     },
//   ])

//   const toggleTask = index => {
//     const newTask = [...tasks];
//     if(newTask[index].isCompleted)
//     {
//       newTask[index].isCompleted = false;
//     }else{
//       newTask[index].isCompleted = true;
//     }
//     updateTask(newTask);
//   }

//   const removeTask = index => {
//     const newTask = [...tasks];
//     newTask.splice(index,1);
//     updateTask(newTask);
//   }
//   return (
//     <div className='container'>
//     <div className='list-of-tasks-todo'>
//       {tasks.map((task, index) => (
//         <div className='task-status'>
//           <span onClick={() => toggleTask(index)} className={task.isCompleted ? "task-name completed-task" : "task-name"}>
//             {index}
//             {task.text}
//           </span>
//           <button onClick={() => removeTask(index)}><i class="fa fa-trash" aria-hidden="true"></i></button>
//         </div>
//       ))}
//       <AddTask addTask={addTask} />
//     </div>
//     </div>
//   )
// }

class MainPage extends React.Component{
  render() {
    return(
      // <SignUpForm/>
      <SendMail/>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MainPage/>
  </React.StrictMode>
)