//import React, { useState, useEffect } from 'react';
import React from 'react';
import './Button.css'

function Button({ children}) {
    return <div>
        <button class="craft-button-primary">
            {children}
        </button>
    </div>
}

export default Button
