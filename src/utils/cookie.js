import { cookie } from 'vux'
// 记录店铺
const openId = 'openId'

export function getopenId () {
  return cookie.get(openId)
}

export function setopenId (id) {
  return cookie.set(openId, id)
}

export function removeopenId () {
  return cookie.remove(openId)
}


 