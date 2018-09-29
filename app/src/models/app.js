
export default {

  namespace: 'app',

  state: {
    department: [
      { name: '管理' },
      { name: '行政' },
      { name: '产品部' },
      { name: '设计部' },
      { name: 'java部' },
      { name: '运维部' },
      { name: 'web前端部' },
      { name: 'Android部' },
      { name: 'Ios部' },
      { name: '测试部' },
      { name: '文案部' },
      { name: '育牛研究部' },
      { name: '植物研究部' },
    ],

    data: [{
      number: 10, remark: '备注信息'
    }]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
