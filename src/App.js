import { useState, useEffect } from 'react';
import './App.css';
import Today from './components/Today';
import All from './components/All';
import Feed from './components/Feed';
import SECRETS from './env';
import Intro from './components/Intro';
import Register from './components/Register';

const App = () => {
  const [taskList, setTasks] = useState([]);
  const [feedList, setFeed] = useState([]);
  const [pageIndex, setIndex] = useState(-2);
  const [userName, setUserName] = useState("johndoedoe");
  const [notify, setNotify] = useState(false);

  // get task data from Google Sheets
  const fetchTasks = () => {
    try {
      let url = `https://sheets.googleapis.com/v4/spreadsheets/${SECRETS.SHEET_ID}`;
      url += `/values/${SECRETS.USER_SHEET}?alt=json&key=${SECRETS.API_KEY}`;
      fetch(url)
        .then(res => res.text())
        .then(rep => {
          if (JSON.parse(rep)['values'] !== undefined) {
            const tempList = [];
            const taskData = JSON.parse(rep)['values'];
            for (let i = 1; i < taskData.length; i++) {
              tempList.push({
                id: i,
                name: taskData[i][0],
                desc: taskData[i][1],
                priority: parseInt(taskData[i][2]),
                duration: parseInt(taskData[i][3]),
                deadline: parseInt(taskData[i][4])
              })
            }
            setTasks(tempList);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  const fetchFeed = () => {
    try {
      let url = `https://sheets.googleapis.com/v4/spreadsheets/${SECRETS.SHEET_ID}`;
      url += `/values/${SECRETS.FEED_SHEET}?alt=json&key=${SECRETS.API_KEY}`;
      fetch(url)
        .then(res => res.text())
        .then(rep => {
          if (JSON.parse(rep)['values'] !== undefined) {
            const tempList = [];
            const taskData = JSON.parse(rep)['values'];
            for (let i = 1; i < taskData.length; i++) {
              tempList.push({
                id: i,
                name: taskData[i][0],
                user: taskData[i][1],
                date: parseInt(taskData[i][2]),
                liked: parseInt(taskData[i][3])
              })
            }
            setFeed(tempList);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchTasks();
    fetchFeed();
  }, []);

  // check for keypress to activate notify demo
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'n' && !notify) {
        setNotify(true);
        document.querySelector(':root').style.setProperty('--demo-height', '20px');
        setTimeout(() => {
          setNotify(false);
          document.querySelector(':root').style.setProperty('--demo-height', '-80px');
        }, 2000)
      } 
    })
  });

  // add task to task list
  const addTask = (task) => {
    let tempList = taskList;
    tempList.push(task);
    setTasks(tempList);
  }

  const editTask = (id, task) => {
    return;
  }
  console.log(notify)
  switch (pageIndex) {
    case -2:
      return (
        <Intro
          setIndex={setIndex}
        />
      );
    case -1:
      return (
        <Register
          setIndex={setIndex}
          setUserName={setUserName}
        />
      );
    case 0: 
      return (
        <Today
          pageIndex={pageIndex}
          setIndex={setIndex}
          addTask={addTask}
          taskList={taskList}
          userName={userName}
          notify={notify}
        />
      );
    case 1: 
      return (
        <All
          pageIndex={pageIndex}
          setIndex={setIndex}
          addTask={addTask}
          editTask={editTask}
          taskList={taskList}
          userName={userName}
          notify={notify}
        />
      );
    default: // case 2
      return (
        <Feed
          pageIndex={pageIndex}
          setIndex={setIndex}
          addTask={addTask}
          feedList={feedList}
          userName={userName}
          notify={notify}
        />
      );
  }
}

export default App;
