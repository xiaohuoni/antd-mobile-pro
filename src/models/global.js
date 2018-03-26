import config from "utils/config";
import queryString from "query-string";

const { prefix } = config;
export default {
  namespace: "global",
  state: {
    showMenu: false,
    menu: [
      {
        label: '二维码地址',
        value:'/'
      }, {
        label: '登录',
        value:'/login'
      },
      {
        label: '表单元素',
        value:'/formelements'
      },{
        label: '上下拉刷新',
        value:'/listrefresh'
      },{
        label: '弹出层',
        value:'/actionsheet'
      },{
        label: '日期时间选择',
        value:'/datepicker'
      },{
        label: '选项按钮列表',
        value:'/listoption'
      },{
        label: '布局',
        value:'/layout'
      },{
        label: 'tab切换',
        value:'/tabs'
      },{
        label: '动态幻灯片',
        value:'/slidebox'
      },{
        label: '视图跳转',
        value:'/view1'
      },{
        label: '查找',
        value:'/search'
      },{
        label: '浏览',
        value:'/browse'
      },{
        label: '简单列表',
        value:'/playlists'
      },{
        label: '手势事件',
        value:'/gesture'
      },{
        label: '消息聊天',
        value:'/message'
      },{
        label: '输入自动完成',
        value:'/autocomplete'
      },{
        label: '列表自动分组',
        value:'/autodivider'
      },{
        label: '水平滚动图片',
        route:'/hscroll'
      },{
        label: '相册',
        value:'/gallery'
      },{
        label: '媒体相册',
        value:'/mediapopup'
      },{
        label: 'EChart统计图',
        value:'/echart'
      },{
        label: 'chartjs统计图',
        value:'/chartjs'
      }
    ]
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query, search }) => {
        dispatch({
          type: "fetch"
        });
      });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    setText(state, { payload }) {
      return {
        ...state,
        text: payload
      };
    }
  },
  effects: {
    *setTitle({ payload }, { call, put, select }) {
      yield put({ type: "save", payload: payload });
    },
  }
};
