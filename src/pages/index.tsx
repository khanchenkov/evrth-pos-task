import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";

const Pages: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task1" element={<TaskOne />} />
      <Route path="/task2" element={<TaskTwo />} />
    </Routes>
  );
};

export default Pages;
