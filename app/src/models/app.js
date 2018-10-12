import httpServer from './../services/';

export default {

  namespace: 'app',

  state: {
    department: [],
    hours: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // httpServer.test();

      dispatch({
        type: 'getDepartment'
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },

    *getDepartment({ payload }, { call, put }) {
      const temp = yield call(httpServer.department, payload);
      let { data } = temp;
      yield put({
        type: 'save',
        payload: {
          department: data.department,
          hours: data.hours,
        }
      });
    },

    *meal({ payload }, { call, put }) {
      const temp = yield call(httpServer.meal, payload);
      let { data } = temp;
      yield put({
        type: 'save',
        payload: {
          department: data.department,
          hours: data.hours,
        }
      })
    },

    *clear({ payload }, { call, put }) {
      const temp = yield call(httpServer.clear, payload);
      let { data } = temp;
      yield put({
        type: 'save',
        payload: {
          department: data,
        }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
