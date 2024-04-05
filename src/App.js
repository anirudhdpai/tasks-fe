import React, { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/tasks';
import { get_tasks } from './utils/tasks';

async function fetchDataAndUpdateState(setTasks) {
  try {
    const tasksData = await get_tasks();
    setTasks(tasksData);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchDataAndUpdateState(setTasks);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  console.log(tasks);

  return (
    <div className="App">
      <h1>My Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
