import React from 'react'
import {Modal} from 'antd'
import 'antd/dist/antd.css'

const modal = (props) => {
    return(
        <Modal
            title="Conclude your order"
            visible={props.show}
            onOk={props.purchaseContinued}
            onCancel={props.purchaseCancelled}>
            {props.children}
        </Modal>
    )
};

export default modal