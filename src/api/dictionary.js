import request from '@/utils/request';


// 带有父id的字典表
export function listByTypeAndPid(type, pid) {
  return request({
    url: '/talent/api/commonDic/listByTypeAndPid',
    method: 'get',
    params: {
        'type': type,
        'pid': pid
    }
  });
}

// 新建
export function createcommonDic(data) {
    return request({
      url: '/talent/api/commonDic/create',
      method: 'post',
      data
    });
}
