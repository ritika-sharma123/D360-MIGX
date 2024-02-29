import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import Projects from "./pages/Project";
import Sources from "./pages/Sources";

function App() {
  return (
    <div className="heading">
      <Layout />
    </div>
  );
}

export default App;
