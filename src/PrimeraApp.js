// Functinoal Components
import React from "react";
// import React, { Fragment } from 'react';
const PrimeraApp = () => {
    const saludo = "Hola Mundo";
    return (
        <>
            <h1> {saludo} </h1>
            {/* <h1> {JSON.stringify{saludo, null, 3}} </h1> */}
            <p> Mi primera aplicación </p>
        </>
    );
};

export default PrimeraApp;
