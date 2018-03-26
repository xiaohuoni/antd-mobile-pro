import {Toast}from 'antd-mobile';

export default {
  onError(err) {
    err.preventDefault();
    Toast.fail(err.message);
  },
};
