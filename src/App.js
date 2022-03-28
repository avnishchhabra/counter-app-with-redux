import ShowNumber from "./components/ShowNumber";
import "./app.css";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "./redux/slices/counterSlice";
import { useDispatch } from "react-redux";

function App() {
  const disptach = useDispatch();
  return (
    <div className="app">
      <ShowNumber />
      <div className="btn-group">
        <button onClick={() => disptach(increment())}>+</button>
        <button onClick={() => disptach(decrement())}>-</button>
        <button onClick={() => disptach(incrementByValue(5))}>+ 5</button>
        <button onClick={() => disptach(decrementByValue(5))}>- 5</button>
      </div>
    </div>
  );
}

export default App;
