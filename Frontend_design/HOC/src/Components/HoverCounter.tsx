import withCounter, { type WithCounterProps } from "./withCounter";


const HoverCounter = ({count, incrementCount} : WithCounterProps) => {
    
    return(
        <>
        <button onMouseOver={incrementCount}>
            Hovered {count} Times
        </button>
        </>
    )
}

export default withCounter(HoverCounter);