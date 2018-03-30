import request from 'utils/request';
import config from 'utils/config';

const { api } = config
const { authtestQuery200,authtestQuery401,authtestQuery403 } = api
export async function query200 (params) {
  return request(authtestQuery200,{
    method: 'get',
    data: params,
  })
}
export async function query401 (params) {
  return request(authtestQuery401,{
    method: 'get',
    data: params,
  })
}
export async function query403 (params) {
  return request(authtestQuery403,{
    method: 'get',
    data: params,
  })
}
