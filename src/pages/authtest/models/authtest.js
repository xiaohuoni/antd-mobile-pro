
import * as authtestService from '../services/authtest'
export default {
    namespace: 'authtest',
    state: {
        response:'',
        username:''
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/authtest') {
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
        },
         *query200({ payload}, { call, put, select }) {
             const data = yield call(authtestService.query200);
             console.log(data);
             yield put({
                 type:'save',
                 payload:{
                    response:data
                 }
             })
        },
        *query401({ payload}, { call, put, select }) {
            const data = yield call(authtestService.query401);
            console.log(data);
            yield put({
                type:'save',
                payload:{
                   response:data
                }
            })
       },
       *query403({ payload}, { call, put, select }) {
        const data = yield call(authtestService.query403);
        console.log(data);
        yield put({
            type:'save',
            payload:{
               response:data
            }
        })
   },
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};        
