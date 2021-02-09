import request from '../requests/request'

export function forLogin(data) {
  return request({
    url: 'login',
    method: 'post',
    data: {
      user_name: data.account,
      password: data.password
    },
    responseType: 'json'
  })
}
