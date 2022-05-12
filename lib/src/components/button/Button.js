//import React, { useState, useEffect } from 'react';
import './Button.css'

function Button({ children}) {
    return <>
        <button class="craft-button-primary">
            {children}
        </button>
    </>
}

export default Button
