import React from 'react'
import './BuildControl.css'
import {Button, Tooltip} from 'antd'
import 'antd/dist/antd.css'

const buildControl = (props) => {

    const content = (
        <div>
            <p>The price of this item is: </p>
        </div>
    ); 
    return(
        <div style={{marginTop: 30}}>
            <div className='BuildControl'>
                <div className='Label'>{props.label}</div>
            </div>
            <Button style={{width: 100}} onClick={props.removed} disabled={props.disabled}>Less</Button>
            <Tooltip title="Click to add one more">   
                <Button type='primary' style={{width: 100}} onClick={props.added } >More</Button>
            </Tooltip>
        </div>
    )
}

export default buildControl