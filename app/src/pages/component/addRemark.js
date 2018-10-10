import { Modal, Input, message } from 'antd';
import _ from 'lodash';

const { TextArea } = Input;

// 农场备注
const Remark = ({ visibleRemark, handleCancel, handerAdd, remarkValue }) => {
  let value = remarkValue || '';
  let handerChange = (e) => {
    value = e.target.value;
  }
  let handerClick = () => {
    if (!value) {
      message.error('请填写备注');
    } else {
      handerAdd(value);
    }
  }

  let contentRemarkCss = {
    'padding': '0 24px 24px 24px',
  }

  return (
    <Modal
      title="备注信息"
      width={600}
      cancelText="取消"
      okText="确定"
      destroyOnClose={true}
      onOk={handerClick}
      visible={visibleRemark}
      onCancel={handleCancel}
      >
      <div>
        <div style={contentRemarkCss}>
          <TextArea rows={8} maxLength={480} defaultValue={remarkValue} onChange={handerChange} />
        </div>
      </div>
    </Modal>
  )
}

export default Remark;
