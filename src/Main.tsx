import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import Quizz from "./components/Quizz/Quizz";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/quizz" element={<Quizz />} />
    </Routes>
  );
};
export default Main;
