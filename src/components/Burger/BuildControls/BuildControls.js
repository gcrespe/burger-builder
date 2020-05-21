import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
import {Button, Layout} from 'antd'
import 'antd/dist/antd.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const {Footer} = Layout;
const buildControls = (props) => {
    return (
    <div className='BuildControls'>
        {controls.map(control => (
            <BuildControl  
                key={control.label} 
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientRemoved(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
        <p style={{marginTop:30}}>Current Price: <strong>U${props.price.toFixed(2)}</strong></p>
        <Button type='primary'
                className='OrderButton' 
                disabled={!props.purchaseable}
                onClick={props.ordered}> Order </Button>
        <Footer className='Footer'>Burger Builder Design ©2020 Created by Giuliano Crespe with AntUI & ReacJS</Footer>
    </div>
    )
};

export default buildControls;