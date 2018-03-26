import * as loginService from "../services/login";
import { Toast } from "antd-mobile";
import router from "umi/router";
export default {
  namespace: "login",
  state: {
    account: "",
    password: ""
  },
  effects: {
    *login({ payload }, { call, put }) {
      const data = yield call(loginService.login, payload);
      if (data.success) {
        router.push("/");
      } else {
        Toast.fail(data.message);
      }
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
