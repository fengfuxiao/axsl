// 封装网络请求
const request = (url, method, params, success, fail, complete) => {
  wx.request({
    url: "http://iwenwiki.com:3002" + url,
    method: method,
    data: params,
    success: (res) => {
      // console.log("res=", res)
      success(res)
    },
    fail: (error) => {
      // console.log("error=", error)
      fail(error)
    },
    complete: () => {
      // console.log("complete")
      complete()
    }
  })
}

module.exports = request