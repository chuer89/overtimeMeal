import styles from './index.less';
import { Input, Button, Row, Col, InputNumber } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import React from 'react';

class AppIndex extends React.Component {
  state = {
    title: [
      { name: '部门', },
      { name: '份数', },
      { name: '备注', },
    ],
    span: [10, 8, 6],
  }

  render() {
    let { app } = this.props;
    let { department, data } = app;
    let { title, span } = this.state;

    // 标题
    let renderTitle = title.map((item, index) => {
      let boxClassName = '';
      if (index === 1) {
        boxClassName = styles.textCenter;
      }

      return (
        <Col key={index} span={span[index]} className={boxClassName}>
          <div className={styles.titleTable}>{item.name}</div>
        </Col>
      )
    });

    // 分数
    let renderNumber = department.map((item, index) => {
      let value = _.get(data, index + '.number') || '';
      return (
        <div className={styles.contentTable} key={index}>
          <InputNumber min={1} max={100} defaultValue={value} />
        </div>
      )
    });

    // 备注
    let renderRemark = department.map((item, index) => {
      let remarks = _.get(data, index + '.remark') || '--';
      return (
        <div className={styles.contentTable} key={index}>{remarks}</div>
      )
    });

    let renderList = department.map((item, index) => {
      return (
        <div key={index} className={styles.contentTable}>{item.name}</div>
      )
    });

    console.log(department)
    return (
      <div className={styles.content}>
        <div>
          <Row>
            <Col span={10}>
              <Input placeholder="新增部门" size="large" />
            </Col>
            <Col span={4} className={styles.textCenter}>
              <Button type="primary" size="large">添加</Button>
            </Col>
          </Row>
        </div>
        <div className={styles.departmentBox}>
          <div>
            <Row>{renderTitle}</Row>
          </div>
          <div>
            <Row>
              <Col span={span[0]}>{renderList}</Col>
              <Col span={span[1]} className={styles.textCenter}>{renderNumber}</Col>
              <Col span={span[2]}>{renderRemark}</Col>
            </Row>
          </div>
        </div>
        <div>
          总计：xx份
        </div>
      </div>
    )
  }
}

export default connect(({ app }) => ({
  app,
}))(AppIndex);
