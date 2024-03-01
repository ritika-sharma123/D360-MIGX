import { useDispatch } from "react-redux";
import "./App.scss";
import Layout from "./components/Layout";
import { increment } from "./store/slices";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increment());
  }, []);

  return (
    <div className="container">
      <Layout />
    </div>
  );
}

export default App;
