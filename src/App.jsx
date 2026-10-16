import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import TaskDetails from "./pages/TaskDetails";
import Posts from "./pages/Posts";
import UserProvider from "./context/UserProvider";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login";
import ProtectRoute from "./components/ProtectRoute";
import ToggleDemo from "./components/ToggleDemo";
import RenderDemo from "./components/RenderDemo";
import MemoDemo from "./components/MemoDemo";

function App() {
  return (
    <AuthProvider>
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
         path="/tasks"
           element={
             <ProtectRoute>
                <Tasks />
            </ProtectRoute>
             }
          />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToggleDemo />
      <RenderDemo />
      <MemoDemo />
    </UserProvider>
    </AuthProvider>
  );
}

export default App;