// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request');
// 加密模块
const crypto = require('crypto');

cloud.init()
const getSessionKey = function(code) {
  return new Promise((resolve, reject) => {
    // json true 响应体 转为 json 格式的
    request({
      method: 'GET',
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      qs: {
        appid: 'wxdc97673149f14048',
        secret: '4e728f1b88e309247a4aef3a484c44ac',
        js_code: code,
        grant_type: 'authorization_code'
      }
    }, (err, res, body) => {
      if(err) {
        reject(err)
      }
      resolve(body)
    })
  })
}
// 云函数入口函数
exports.main = async (event, context) => {
  // 捕获代码错误
  try {
    const { code } = event;
    const weixinRes = await getSessionKey(code);
    const { openid, session_key } = weixinRes;
    // 1: 创建一个 哈希加密算法
    // 2: 对谁加密
    // 3: 以什么格式输出 hex 16进制
    const skey = crypto.createHash('sha1')
    .update(session_key, 'utf8')
    .digest('hex')
    // session 是保存在服务端的一个信息
    // 返回 session key
    return {
      skey
    }
  } catch (error) {
    return {
      error
    }
  }
}