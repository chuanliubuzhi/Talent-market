import request from '@/utils/request';


// 显示公司信息
export function findOneCompany() {
  return request({
    url: '/talent/api/company/findOneCompany',
    method: 'get'
  });
}

// 创建公司信息
export function createOneCompany(data) {
    return request({
      url: '/talent/api/company/create',
      method: 'post',
      data
    });
}


// 修改公司信息
export function updateCompany(data) {
    return request({
      url: '/talent/api/company/update',
      method: 'POST',
      data
    });
}

// 招聘历史
export function recruiment(data) {
    return request({
      url: '/talent/api/recruiment/listByPage',
      method: 'POST',
      data
    });
}

// 删除发布历史
export function deleteById (data) {
    return request({
      url: '/talent/api/recruiment/deleteById',
      method: 'POST',
      data
    });
}
// {
// 	"pagesize":"5",
// 	"pageLastId":"127521755463093"  pageLastId填写orderId 上一页列表最后一个招聘信息的orderId
// }

// 企业信息首页
export function companyindex() {
    return request({
      url: 'talent/api/company/stat',
      method: 'get',
    })
   }

// 根据id获取招聘详情
export function findById(id) {
    return request({
      url: '/talent/api/recruiment/findById',
      method: 'get',
      params: {
          'id': id
      }
    });
  }


// 发布招聘
export function postjob (data) {
    return request({
      url: '/talent/api/recruiment/create',
      method: 'POST',
      data
    });
}
// 修改招聘
export function updatejob (data) {
    return request({
      url: '/talent/api/recruiment/update',
      method: 'POST',
      data
    });
}

// 个人信息
export function myinfo() {
    return request({
      url: '/talent/api/wxUser/stat',
      method: 'get',
    });
}


// 我的伯乐录用
export function companyEmploy (data) {
    return request({
      url: '/talent/api/companyEmploy/listByPage',
      method: 'POST',
      data
    });
}
// 我被收藏
export function mycollected (data) {
    return request({
      url: '/talent/api/companyEmploy/listByPage',
      method: 'POST',
      data
    });
}

// 已收简历列表
export function receivedresume (data) {
    return request({
      url: '/talent/api/companyResume/listResumeByPage',
      method: 'POST',
      data
    });
}

// 人才库列表
export function employlist (data) {
    return request({
      url: '/talent/api/companyEmploy/listByPage',
      method: 'POST',
      data
    });
}

// 员工档案列表
export function employees (data) {
    return request({
      url: '/talent/api/companyEmploy/listByPage',
      method: 'POST',
      data
    });
}


// 预约面试
export function appoint (data) {
    return request({
      url: '/talent/api/company/appoint',
      method: 'POST',
      data: {userId: data}
    });
}



