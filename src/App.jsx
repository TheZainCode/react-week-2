import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import TaskDetails from "./pages/TaskDetails";
import Posts from "./pages/Posts";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </UserProvider>
  );
}

export default App;