import axios from 'axios'
import {getopenId,setoppenid,removeopenId} from '@/utils/cookie.js'

// 实例化 axios
const service = axios.create({
  baseURL: 'http://www.vastall.cn',
  timeout: 5000,
  headers: {'content-type': 'application/json'}
})

// 请求拦截器
service.interceptors.request.use(config => {
    let openId = getopenId()
    if(config.method == 'post'){
        config.params = {
            // openId: openId,
            openId: 'ojURPwlT1MVdr8LLlF5Vno3alxKo',
          ...config.data
        }
    }else if(config.method == 'get'){

          config.params = {
            // openId: openId,
            openId: 'ojURPwlT1MVdr8LLlF5Vno3alxKo',
             ...config.params
          }


    }
    return config
  }, error => {
    console.log(error)
    Promise.reject(error)
  })
export default service
