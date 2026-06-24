import withCounter, { type WithCounterProps } from "./withCounter";


const ClickCounter = ({count, incrementCount}: WithCounterProps) => {
    return (
        <div>
            <button onClick={incrementCount}>
                Clicked {count} times
            </button>

        </div>
    )
}

export default withCounter(ClickCounter);