import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import { increment, decrement, incrementByAmount, multiply, division } from "./redux/counter/counterSlice";
import Calculation from "./components/Calculation";
import FakeApi from "./components/FakeApi";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="container">
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <div className="main-content">This is main {count}</div>
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="button" onClick={() => dispatch(multiply())}>
          *
        </button>
        <button className="button" onClick={() => dispatch(division())}>
          /
        </button>
        <button className="button" onClick={() => dispatch(incrementByAmount(5))}>
          incrementByAmount (5)
        </button>
      </div>
      <Calculation />
      <FakeApi />
    </>
  );
}

export default App;
