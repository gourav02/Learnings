import Counter from "./Counter";

const HoverCounterTwo = () => {
  return (
    <Counter>
      {({ count, incrementCount }) => (
        <h2 onMouseOver={incrementCount}>
          Hovered {count} times
        </h2>
      )}
    </Counter>
  );
};

export default HoverCounterTwo;