import React from 'react'
import './OrderSummary.css'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
        return (<li key={key}>
                <span style={{textTransform:'capitalize'}}> {key}: </span> 
                {props.ingredients[key]}
                </li>)
    })
    return(
        <div>
            <p>A delicious burger with the following ingredients:</p>
                {ingredientSummary}
                <p></p>
            <p><strong>Total Price: R${props.price}</strong></p>
        </div>
    )

};

export default orderSummary;