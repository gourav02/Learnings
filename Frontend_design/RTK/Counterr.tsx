import { increment, decrement, reset, incrementAsync } from "./Slices/counterSlice";
import type { AppDispatch, RootState } from "./store";
import {useSelector, useDispatch} from "react-redux";

export const Counterr = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();
  return( <div>
    <h2>{count}</h2>
    <button onClick={() => dispatch(incrementAsync(25))}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
  </div>);
};
