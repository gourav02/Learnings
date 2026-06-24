import Counter from "./Counter";

const ClickCounterOne = () => {
  return (
    <Counter>
      {({ count, incrementCount }) => (
        <button onClick={incrementCount}>
          Clicked {count} times
        </button>
      )}
    </Counter>
  );
};

export default ClickCounterOne;