import { useState } from "react"; 
import useTasks from "../hooks/useTasks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

function TaskManager() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; 
  });

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="mx-auto max-w-xl bg-white p-6 shadow-md rounded-xl space-y-6">
        <h1 className="text-3xl font-bold text-blue-600">Task Manager App</h1>
        <TaskForm onAddTask={addTask} />
        <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </section>
    </main>
  );
}

export default TaskManager;