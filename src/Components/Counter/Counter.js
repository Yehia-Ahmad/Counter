import React from "react";
import styles from './Counter.module.css'

const Counter = () => {
    return (
        <>
            <div className={styles.container}>
                <h4>REDUX COUNTER</h4>
                <h3>-- COUNTER VALUE --</h3>
                <button>Toggle Counter</button>
            </div>
        </>
    )
}

export default Counter;