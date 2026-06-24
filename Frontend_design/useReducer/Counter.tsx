import React, { useReducer } from "react";

const initialValue: State = {
    firstCounter : 0,
    secondCounter : 0
};

type Action = {
    type: string
    value?: number
}

type State = {
    firstCounter: number
    secondCounter: number
}

const reducer = (state: State, action : Action): State => {
    switch (action.type) {
        case 'Increment':
            return {
                firstCounter: state.firstCounter + (action.value || 0),
                secondCounter: state.secondCounter
            };
        case 'Decrement':
            return {
                firstCounter: state.firstCounter - (action.value || 0),
                secondCounter: state.secondCounter
            };
        case 'Increment2':
            return {
                firstCounter: state.firstCounter,
                secondCounter: state.secondCounter + (action.value || 0)
            };
        case 'Decrement2':
            return {
                firstCounter: state.firstCounter,
                secondCounter: state.secondCounter - (action.value || 0)
            };
        case 'Reset':
            return initialValue;
        default:
            return state;
    }
}

export const Counter = () => {
    const getInitialCounter = (): State => {
    const saved = localStorage.getItem('counter');
    return saved ? JSON.parse(saved) : initialValue;
};
const getInitialCounterTwo = (): State => {
    const saved = localStorage.getItem('counterTwo');
    return saved ? JSON.parse(saved) : initialValue;
};
// The third parameter is a function that returns the initial state, 
// used only on the first render for performance and dynamic initialization (like loading from storage).
const [counter, dispatch] = useReducer(reducer, initialValue, getInitialCounter);
const [counterTwo, dispatchTwo] = useReducer(reducer, initialValue, getInitialCounterTwo);
    // Persist to localStorage on state change
    React.useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter]);
    React.useEffect(() => {
        localStorage.setItem('counterTwo', JSON.stringify(counterTwo));
    }, [counterTwo]);
    return(
        <>
        <div>
            Counter x1 : {counter.firstCounter}
            <button onClick={() => dispatch({type : 'Increment', value : 5})}>Increment by 1</button>
            <button onClick={() => dispatch({type : 'Decrement',  value : 5})}>Decrement by 1</button>
            <button onClick={() => dispatch({type : 'Reset'})}>Reset</button>
        </div>
        <div>
            Counter x5 : {counterTwo.secondCounter}
              <button onClick={() => dispatchTwo({type : 'Increment2',  value : 10})}>Increment by 1</button>
            <button onClick={() => dispatchTwo({type : 'Decrement2',  value : 10})}>Decrement by 1</button>
            <button onClick={() => dispatchTwo({type : 'Reset'})}>Reset</button>
        </div>
        </>
    )
}