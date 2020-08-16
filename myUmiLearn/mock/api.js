import Mock from 'mockjs'

let result = Mock.mock({
  msg: '查询过来啦',
  status: 'success',
  'data|66': [{
    name: '@name',
    address: '@city',
    appkey: /demo\d{2}_\d{10}/,
    'birth|1975-2010': 1,
    ctime: '@date',
    utime: '@date',
    email: '@email',
    'id|+1': 1,
    phone: /1[3-8]\d{9}/,
    sNo: /\d{5}/,
    'sex|1': [0, 1]
  }]
})

export default {
  // 支持值为 Object 和 Array
  // 'GET /api/student/findAll': result,
}