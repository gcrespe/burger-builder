import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link} from 'react-router-dom'

import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import previousOrders from './containers/PreviousOrders/previousOrders'
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {
  state = {
    collapsed: false,
    selectedKey: 1,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render(){
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh'}}> 
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/build">Build burger</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/orders">Previous Orders</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Offers">
                <Menu.Item key="3">Barbecue</Menu.Item>
                <Menu.Item key="4">Vegan</Menu.Item>
                <Menu.Item key="5">Smash</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Coupons">
                <Menu.Item key="6">Individual Coupons</Menu.Item>
                <Menu.Item key="8">Group Coupons</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<LogoutOutlined />}>Logout</Menu.Item>
            </Menu>
          </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Route path="/build" exact component={BurgerBuilder}/>
            <Route path="/orders" exact component={previousOrders}/>
          </Content>
        </Layout>
        </Layout> 
      </BrowserRouter>
    );
  }
  
}

export default App;
