import { Modal, Input, Form, DatePicker, message } from 'antd';
import _ from 'lodash';
import moment from 'moment';

const { TextArea } = Input;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 15 },
  },
};

// 农场备注
const EnterAccount = ({
  visible,
  handleCancel,
  handerAdd,
  quantity,
  form: {
    getFieldDecorator,
    validateFields,
  }
}) => {
  let handerSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        values.date = moment(values.date).format('YYYY-MM-DD');
        if (values.password !== 'hua.zhui') {
          message.error('密码错误，请咨询管理员');
          return false;
        }
        delete values.password;
        handerAdd(values);
      }
    });
  }

  let contentRemarkCss = {
    'padding': '0 24px 24px 24px',
  }

  const todyDate = moment(new Date());

  return (
    <Modal
      title="备注信息"
      width={600}
      cancelText="取消"
      okText="确定"
      destroyOnClose={true}
      onOk={handerSubmit}
      visible={visible}
      onCancel={handleCancel}
    >
      <div>
        <div style={contentRemarkCss}>
          <form>
            <FormItem {...formItemLayout} label="入账日期">
              {getFieldDecorator('date', {
                rules: [{
                  required: true, message: '请选择入账日期',
                }],
                initialValue: todyDate,
              })(
                <DatePicker />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="密码">
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入密码'
                }],
              })(
                <Input placeholder="提示：追花大农" autoComplete="off" maxLength="32" type="password" />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="份数">
              {getFieldDecorator('quantity', {
                rules: [{
                  required: true, message: '请输入份数'
                }],
                initialValue: quantity,
              })(
                <Input placeholder="请输入份数" autoComplete="off" maxLength="32" />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="岗位描述">
              {getFieldDecorator('remark')(
                <TextArea rows={3} placeholder="请输入岗位描述" maxLength="300" />
              )}
            </FormItem>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default Form.create()(EnterAccount);
