import React,{Component} from 'react'
import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder'

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh'}}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Build burger
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Previous orders
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
             <BurgerBuilder/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar