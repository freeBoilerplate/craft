//import React, { useState, useEffect } from 'react';
import React from 'react';
import './H1.css'

function H1({ children }) {
    return <div>
        <h1 class={"craft-h1"}>
            {children}
        </h1>
    </div>
}

export default H1
