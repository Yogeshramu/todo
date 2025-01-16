import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "./components/firebase";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";
import "./App.css";
import Login from "./components/AuthForm";

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate("/login");
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    await auth.signOut();
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/"
          element={isAuthenticated ? (
            <div>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
              <TaskForm setTasks={setTasks} />
              <main className="app_main">
                <TaskColumn
                  title="To do"
                  icon={todoIcon}
                  tasks={tasks}
                  status="todo"
                  handleDelete={handleDelete}
                />
                <TaskColumn
                  title="Doing"
                  icon={doingIcon}
                  tasks={tasks}
                  status="doing"
                  handleDelete={handleDelete}
                />
                <TaskColumn
                  title="Done"
                  icon={doneIcon}
                  tasks={tasks}
                  status="done"
                  handleDelete={handleDelete}
                />
              </main>
            </div>
          ) : (
            <Login />
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
