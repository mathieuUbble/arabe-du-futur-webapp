import { Routes, Route } from "react-router-dom";
import SignIn from "./components/Authentification/SignIn";
import SignUp from "./components/Authentification/SignUp";
import Quizz from "./components/Quizz/Quizz";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/quizz" element={<Quizz />} />
    </Routes>
  );
};
export default Main;
