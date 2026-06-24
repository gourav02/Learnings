import React, { useState } from "react";

export interface WithCounterProps {
  count: number;
  incrementCount: () => void;
}

function withCounter<p extends object>( //P can be any object type. (generaic type parameter)
  WrapperComponent: React.ComponentType<p & WithCounterProps>,
) {
  //WrapperComponent -> is react Component who accepts ts own props (P) plus the counter props injected(withCounterProps) by the HOC
  return function EnhancedCompoent(props: p) {
    //EnhancedCompoent only takes the originalComponents props
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      const newCount = count + 1;
      setCount(newCount);
    };

    return (
      <WrapperComponent count={count} incrementCount={incrementCount} {...props} />
    );
  };
}

export default withCounter;
