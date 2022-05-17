//import React, { useState, useEffect } from 'react';
import React from 'react';
import './Button.css'

function Button({ children, handleClick, type, outline, disabled, size }) {
    const types = ["primary", "secondary", "success", "danger"]
    const sizes = ["sm", "md", "lg"]

    // ex: craft-btn-outline-primary md disabled
    // ex: craft-btn-primary md disabled
    return <div>
        <button 
            class={
                "craft-btn" + (outline ? "-outline" : "") + 
                (types.includes(type) ? "-" + type : "-primary") + 
                (sizes.includes(size) ? " " + size : " md") +
                (disabled ? " disabled" : "")
            } 
            onClick={handleClick}
        >
            {children}
        </button>
    </div>
}

export default Button
