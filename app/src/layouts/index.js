import styles from './index.less';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import React from 'react';

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    selectedKeys: [],
    defaultSelectedKeys: ['1'],
  };

  UNSAFE_componentWillMount() {
    let menusKey = {
      '/': ['1'],
      '/navigation': ['2'],
      '/meeting': ['3'],
    }
    let { location } = this.props;
    let { pathname } = location;
    let selectedKeys = menusKey[pathname] || this.state.defaultSelectedKeys;

    this.setState({
      selectedKeys,
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    let { children } = this.props;
    let { selectedKeys } = this.state;

    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>快捷小工具</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKeys}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="coffee" theme="outlined"/>
                <span>加班点餐</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/navigation">
                <Icon type="global" theme="outlined" />
                <span>系统导航</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/meeting">
                <Icon type="global" theme="outlined" />
                <span>会议工具</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '90vh' }}>
            { children }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

function BasicLayout(props) {
  // 判断url输出不同
  // console.log(props.location, 'x')
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>小工具</h1>
      { props.children }
    </div>
  );
}

export default SiderDemo;
