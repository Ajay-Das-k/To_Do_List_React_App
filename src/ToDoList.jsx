import React ,{useState}from 'react'

function ToDoList() {
   const [tasks, setTasks] = useState([]);
   const [newTask,setNewTask]=useState("")

   function handleInputChange(event){
      setNewTask(event.target.value);


   }
   function addTask(){
      if(newTask.trim()!==""){
         setTasks(t=>[...t,newTask])
      setNewTask("")
      }
      
   }
   function deleteTask(index) {
    const updatedTasks=tasks.filter((_,i)=>i!==index)
    setTasks(updatedTasks)
   }
   function MoveTaskUp(index){
    if(index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=
      [updatedTasks[index-1],updatedTasks[index]]
      setTasks(updatedTasks)
    }

   }
    function MoveTaskDown(index) {
    if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [
            updatedTasks[index + 1],
            updatedTasks[index],
        ];
        setTasks(updatedTasks);
    }


      
   }
  return (
    <>
      <div className="To-Do-List">
        <div className="title_Container">
          <h1 className="">Todo List</h1>
        </div>

        <div className="">
          <input
            type="text"
            placeholder="Enter A Task ....."
            value={newTask}
            onChange={handleInputChange}
          ></input>
          <button className="add-Button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((tasks, index) => (
            <li key={index}>
              <span className="text">{tasks}</span>
              <button className="delete-Button" 
              onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="up-Button" 
              onClick={() => MoveTaskUp(index)}>
                Up
              </button>
              <button
                className="Down-Button"
                onClick={() => MoveTaskDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList