'use client'
import styles from "@/styles/Home.module.css";
import AddTask from '../components/addTask'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_TASKS_REQUEST } from '../../app/redux/actions/task.action';

export default function Home() {
  const { tasks, loading, error } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_TASKS_REQUEST });
  }, [dispatch]);

  return (
    <div className={styles.main} >
      <h1>Todo App Next.js</h1>
      <AddTask />
      {loading && <p>Loading tasks...</p>}
      {error && <p>Error fetching tasks: {error}</p>}
      <ol>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
          </li>
        ))}
      </ol>
    </div>

  );
}
