// Functinoal Components
import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    // handleSubstract
    const handleSubstract = () => {
        setCounter((c) => (c > 0)? c - 1 : 0);
    }
    const handleReset = () => {
        setCounter((c) => c = value);
    }
    const handleAdd = () => {
        setCounter((c) => c + 1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            {/* <h1> {JSON.stringify{saludo, null, 3}} </h1> */}
            <h2> {counter} </h2>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;