// Functinoal Components
import React from "react";
import PropTypes from "prop-types";

// import React, { Fragment } from 'react';
const PrimeraApp = ({ saludo }) => {
    


    return (
        <>
            <h1> {saludo} </h1>
            {/* <h1> {JSON.stringify{saludo, null, 3}} </h1> */}
            <p> Mi primera aplicación </p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;
