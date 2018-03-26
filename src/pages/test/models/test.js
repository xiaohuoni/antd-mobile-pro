
import * as testService from '../services/test'
export default {
    namespace: 'test',
    state: {
        text: 'page work',
        list: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/test') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({
                type: 'save', payload: {
                        text: 'page init'
                    }
            });
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};        
