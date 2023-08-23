import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../../Store/counter';
import React from "react";
import styles from './Counter.module.css'

const Counter = () => {


    const dispatch = useDispatch();
    const isAuthentication = useSelector(state => state.Authentication.isAuthentication)
    const counter = useSelector(state => state.Counter.counter);
    const show = useSelector(state => state.Counter.showCounter);
    /*
    const incrementButtonHandler = () => {
        dispatch({ type: "Increment" })
    }

    const increaseButtonHandler = () => {
        dispatch({ type: "Increase", amount: 5 })
    }

    const decrementButtonHandler = () => {
        dispatch({ type: "Decrement" })
    }

    const toggleHandler = () => {
        dispatch({ type: "Hide" })
    }*/

    const incrementButtonHandler = () => {
        dispatch(counterActions.increament());
    }

    const increaseButtonHandler = () => {
        dispatch(counterActions.increase(5)) // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
        // dispatch(counterActions.increase({ amount: 5 }))
    }

    const decrementButtonHandler = () => {
        dispatch(counterActions.decreament())
    }

    const toggleHandler = () => {
        dispatch(counterActions.toggle())
    }

    const counterComponent = (
        <div className={styles.container}>
            <h1 className={styles.header}>REDUX COUNTER</h1>
            {show && <h1 className={styles.value}>{counter}</h1>}
            <div>
                <button onClick={incrementButtonHandler}>Increment</button>
                <button onClick={increaseButtonHandler}>Increase By 5</button>
                <button onClick={decrementButtonHandler}>Decrement</button>
            </div>
            <button onClick={toggleHandler}>Toggle Counter</button>
        </div>
    )
    return isAuthentication && counterComponent
}

export default Counter;