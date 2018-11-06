/**
 * title: 大农-系统导航
 */

import { Card } from 'antd';
import style from './index.less';
import React from 'react';

const tabList = [{
  key: 'tab1',
  tab: '测试',
}, {
  key: 'tab2',
  tab: '生产',
}];

class Navigation extends React.Component {
  state = {
    collapsed: false,
    key: 'tab1',
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  }

  render() {
    let commonData = [{
      name: '蝉道', link: 'http://203.6.234.220:9880/index.php?m=product&f=index&locate=no',
    }, {
      name: 'UI-蓝湖', link: 'https://lanhuapp.com/web/#/item',
    }, {
      name: 'WEB-企业邮箱', link: 'https://exmail.qq.com/cgi-bin/frame_html',
    }, {
      name: 'GIT代码', link: 'http://203.6.234.220:9600/',
    }, {
      name: 'Confluence', link: 'http://203.6.234.220:9660/pages/viewpage.action?pageId=4653098',
    }, {
      name: 'TAPD', link: 'http://tapd.com',
    }];

    let farmDevData = [{
      name: 'WEB 官网', link: 'http://dev.www.worldfarm.com',
    }, {
      name: '客服运营系统', link: 'http://dev.admin.worldfarm.com'
    }];
    let renderFarmDev = farmDevData.map((item, index) => {
      return (
        <a href={item.link} key={index} className={style.linkItem} target="_blank">{item.name}</a>
      )
    });
    let farmLineData = [{
      name: 'WEB 官网', link: 'http://www.worldfarm.com',
    }, {
      name: '客服运营系统', link: 'http://admin.worldfarm.com'
    }];
    let renderFarmLine = farmLineData.map((item, index) => {
      return (
        <a href={item.link} key={index} className={style.linkItem} target="_blank">{item.name}</a>
      )
    });

    const contentList = {
      tab1: <div>{renderFarmDev}</div>,
      tab2: <div>{renderFarmLine}</div>,
    };

    return (
      <div>
        <Card title="公共" style={{ marginBottom: 24 }}>
          {
            commonData.map((item, index) => {
              return (
                <a href={item.link} key={index} className={style.linkItem} target="_blank">{item.name}</a>
              )
            })
          }
        </Card>

        <Card
          title="世界农场"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    )
  }
}

export default Navigation;