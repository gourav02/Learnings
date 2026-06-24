import useCounter from "./useCounter";



const ClickCounterThree = () => {
    const {count, handleCount} = useCounter();
    return (
        <>
        <button onClick={handleCount}>
            Clicked {count} time
        </button>
        </>
    )
}

export default ClickCounterThree;