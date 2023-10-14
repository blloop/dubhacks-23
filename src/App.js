import { useState } from 'react';
import './App.css';
import Today from './components/Today';
import All from './components/All';
import Feed from './components/Feed';

const App = () => {
  // let getList = localStorage.getItem('dh23-tasklist');
  // const [taskList, setTasks] = useState(getList ? 
  //   JSON.parse(getList) : []
  // );
  const [taskList, setTasks] = useState([]);
  const [pageIndex, setIndex] = useState(0);

  // Function to add task
  const addTask = (task) => {
    let tempList = taskList;
    tempList.push(task);
    setTasks(tempList);
  }

  switch (pageIndex) {
    case 0: 
      return (
        <Today
          pageIndex={pageIndex}
          setIndex={setIndex}
          addTask={addTask}  
        />
      );
    case 1: 
      return (
        <All
          pageIndex={pageIndex}
          setIndex={setIndex}
          addTask={addTask}  
        />
      );
    default: // case 2
      return (
        <Feed
          pageIndex={pageIndex}
          setIndex={setIndex}
          addTask={addTask}  
        />
      );
  }
}

export default App;
