import React,{Component} from 'react'
import 'antd/dist/antd.css'
import './LoginButton.css'   
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';

const { Option } = Select;

class loginButton extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };
    
    render(){
        return(
            <>
                <div className='loginButton'>
                    <Button style={{width: 80, height: 30}} type='primary' onClick={this.showDrawer}> Login </Button>
                </div>
                <Drawer
                title="Login"
                width={220}
                onClose={this.onClose}
                visible={this.state.visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                    style={{
                        textAlign: 'right',
                    }}
                    >
                    <Button onClick={this.onClose} type="primary">
                        Login
                    </Button>
                    </div>
                }
                >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={6}>
                        <Col span={24}>
                            <Form.Item
                                name="Username"
                                label="Username"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                <Input placeholder="Username" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={6}>
                        <Col span={24}>
                            <Form.Item
                                name="Password"
                                label="Password"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                <Input placeholder="Password" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
  }
}

export default loginButton
