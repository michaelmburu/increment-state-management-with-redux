import {useSelector, useDispatch} from 'react-redux';
import { getNumberOfClicks } from "./Redux/Selector/selector";
import { counterButtonClicked } from "./Redux/Actions/actions";
import { useState } from 'react';
export const CounterButton = () => {
    
     // using Redux
     const numberOfClicks = useSelector(getNumberOfClicks);
     const dispatch = useDispatch();
     // Keep useState because this is the only place you can update the incrementValue
    const [increment, setIncrementBy] = useState(1);
   
    return (
        <>
            <p>You have clicked the button {numberOfClicks} times</p>
            <label>Increment By</label>
            <input value={increment} type="number" onChange={ e => setIncrementBy(Number(e.target.value))} />
            <button onClick={e => dispatch(counterButtonClicked(increment))}>Increment</button>
        </>
    )
}