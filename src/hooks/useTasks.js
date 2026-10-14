
import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      return savedTasks
        ? JSON.parse(savedTasks)
        : [
            {
              id: crypto.randomUUID(),
              title: "Learn React",
              completed: false,
            },
            {
              id: crypto.randomUUID(),
              title: "Build Task Manager",
              completed: false,
            },
          ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
  };
}

export default useTasks;