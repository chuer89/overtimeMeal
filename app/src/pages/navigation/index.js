/**
 * title: 大农-系统导航
 */

import { Card } from 'antd';
import style from './index.less';
import React from 'react';
import { commonData, farmDevData, farmLineData, farmTabList, miaoTabList, miaoDevData } from './config/card';

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

    miaoKey: 'tab1',
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  }

  render() {
    
    let renderFarmDev = farmDevData.map((item, index) => {
      return (
        <a href={item.link} key={index} className={style.linkItem} target="_blank">{item.name}</a>
      )
    });
    
    let renderFarmLine = farmLineData.map((item, index) => {
      return (
        <a href={item.link} key={index} className={style.linkItem} target="_blank">{item.name}</a>
      )
    });

    const contentList = {
      tab1: <div>{renderFarmDev}</div>,
      tab2: <div>{renderFarmLine}</div>,
    };

    let renderMiaoDev = miaoDevData.map((item, index) => {
      return (
        <a href={item.link} key={index} className={style.linkItem} target="_blank">{item.name}</a>
      )
    });;
    let renderMiaoLine = '待上线';
    const miaoContentList = {
      tab1: <div>{renderMiaoDev}</div>,
      tab2: <div>{renderMiaoLine}</div>,
    };

    return (
      <div>
        <Card title="公共">
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
          tabList={farmTabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          style={{ margin: '24px 0' }}
        >
          {contentList[this.state.key]}
        </Card>

        <Card
          title="苗叔（家庭农场）"
          tabList={miaoTabList}
          activeTabKey={this.state.miaoKey}
          onTabChange={(key) => { this.onTabChange(key, 'miaoKey'); }}
        >
          {miaoContentList[this.state.miaoKey]}
        </Card>
      </div>
    )
  }
}

export default Navigation;