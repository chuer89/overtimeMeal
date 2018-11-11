import React from 'react';
import { Tabs, Icon } from 'antd';

const TabPane = Tabs.TabPane;

class Navigation extends React.Component {
  state = {
    defaultRoom: '1',
  }

  render() {
    const { defaultRoom } = this.state;

    let roomData = [{
      name: '会议室一',
      key: '1',
      icon: 'lock',
      render: () => {
        return (
          <div>
            12
          </div>
        )
      }
    }, {
      name: '会议室二',
      key: '2',
      icon: 'unlock',
      render: () => {
        return (
          <div>准备中</div>
        )
      }
    }];

    let renderRoom = roomData.map((item, index) => {
      return (
        <TabPane tab={<span><Icon type={item.icon} />{item.name}</span>} key={item.key}>
          {item.render()}
        </TabPane>
      )
    })

    let tabsProps = {
      tabBarGutter: 7,
      size: 'large',
      type: 'card',
      animated: true,
      defaultActiveKey: defaultRoom,
      tabBarStyle: { paddingLeft: '24px' }
    }

    return (
      <div>
        <Tabs {...tabsProps}>{renderRoom}</Tabs>
      </div>
    )
  }
}

export default Navigation;