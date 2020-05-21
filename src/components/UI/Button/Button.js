import React from 'react'

const Button = (props) => (
    <button 
        className={props.btnType}
        onClick={props.clicked}>{props.children}
    </button>
)

export default Button;