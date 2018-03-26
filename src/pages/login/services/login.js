import request from 'utils/request';
import config from 'utils/config';

const { api } = config
const { userLogin } = api

export async function login(params) {
  return request(userLogin,{
    method: 'POST',
    body: params,
  })
}