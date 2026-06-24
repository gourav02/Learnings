import { useState } from "react";

// children must be a function 
// that accepts an object containing count and incrementCount, and returns valid React UI.
interface CounterProps {
  children: (props: {
    count: number;
    incrementCount: () => void;
  }) => React.ReactNode;
}

const Counter = ({ children }: CounterProps) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
//children simply a function call.
// children =
//   ({ count, incrementCount }) => (
//     <button onClick={incrementCount}>
//       Clicked {count} times
//     </button>
//   );
  return children({
    count,
    incrementCount,
  });
};

export default Counter;