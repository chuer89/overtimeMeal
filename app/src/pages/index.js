/**
 * title: 加班点餐
 */
import styles from './index.less';
import { Row, Col, InputNumber, Icon, Button, Modal } from 'antd';
import { connect } from 'dva';
import _ from 'lodash';
import React from 'react';
import AddRemark from './components/addRemark';

const confirm = Modal.confirm;

class AppIndex extends React.Component {
  state = {
    title: [
      { name: '部门', },
      { name: '份数', },
      { name: '备注', },
    ],
    span: [10, 8, 6],

    visibleRemark: false,
    indexList: 0,
    remarkValue: '',
  }

  render() {
    let { app, dispatch } = this.props;
    let { department } = app;
    let { title, span, visibleRemark, indexList, remarkValue } = this.state;
    let self = this;

    // 标题
    let renderTitle = title.map((item, index) => {
      let boxClassName = '';
      if (index === 1) {
        boxClassName = styles.textCenter;
      }

      return (
        <Col key={index} span={span[index]} className={boxClassName}>
          <div className={styles.titleTable}>
            {item.name}
          </div>
        </Col>
      )
    });

    // 分数 加减
    let handerChangeNumber = (value, index) => {
      dispatch({
        type: 'app/meal',
        payload: {
          value,
          index,
        }
      });
    }
    let renderNumber = department.map((item, index) => {
      let value = item.number || '';
      return (
        <div className={styles.contentTable} key={index}>
          <InputNumber min={0} max={100} value={value} onChange={(value) => {handerChangeNumber(value, index)}} />
        </div>
      )
    });

    // 备注
    let openRemark = (index, remarkValue) => {
      self.setState({
        visibleRemark: true,
        indexList: index,
        remarkValue,
      });
    }
    let renderRemark = department.map((item, index) => {
      let remarks = item.remark || '无';
      return (
        <div className={styles.contentTable} key={index}>
          <Button className={styles.addRemark} size="small" onClick={() => {openRemark(index, item.remark)}}>编辑</Button>
          <span title={remarks}>{remarks}</span>
        </div>
      )
    });

    let renderList = department.map((item, index) => {
      return (
        <div key={index} className={styles.contentTable}>
          <Icon type="idcard" theme="outlined" className={styles.departmentDel} />
          {item.name}
        </div>
      )
    });

    // 总份
    let allNumber = 0;
    _.forEach(department, (item) => {
      allNumber += (item.number - 0 || 0);
    });

    let addRemarkOpt = {
      visibleRemark, 
      handleCancel() {
        self.setState({
          visibleRemark: false,
        })
      },
      handerAdd(value) {
        dispatch({
          type: 'app/meal',
          payload: {
            value,
            index: indexList,
            isRemark: true,
          }
        });
        self.setState({
          visibleRemark: false,
        })
      }, 
      remarkValue,
    }

    let showDeleteConfirm = () => {
      confirm({
        title: '确定清空吗?',
        content: '清除后，数据无法恢复。 ',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          dispatch({
            type: 'app/clear',
          });
        },
        onCancel() {

        },
      });
    }
    
    return (
      <div className={styles.content}>
        <div>
          <AddRemark {...addRemarkOpt} />
        </div>
        <div className={styles.departmentBox}>
          <div>
            <p className={styles.infoTips}>
            提醒：本系统未实名，未防刷，未防重复点餐；<span className={styles.pointInfo}>请备注用餐人姓名，否则无效</span>。请一个部门指派一人操作，切忌误点错部门
            </p>
          </div>
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
        <div className={styles.numberAll}>
          总计：<span className={styles.number}>{allNumber}</span>份
          <Button className={styles.resetBtn} type="danger" onClick={showDeleteConfirm}>清空</Button>
        </div>
      </div>
    )
  }
}

export default connect(({ app }) => ({
  app,
}))(AppIndex);
