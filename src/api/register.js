import request from '../requests/request'

export function forRegister(data) {
  return request({
    url: 'register',
    method: 'post',
    data: {
      user_name: data.account,
      phone: data.phone,
      pwd: data.pwd,
      upwd: data.upwd
    },
    responseType: 'json'
  })
}
