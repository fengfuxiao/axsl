// pages/search/search.js
const request = require("../../utils/request")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 输入框的值
    inputValue: "",
    // 搜索结果列表
    shopList: [],
  },

  // 获取输入框的数据
  onChangeInputValue(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  // 查询数据
  // url, method, params, success, fail, complete
  onSearch() {
    // console.log("value=", this.data.inputValue)
    request("/api/foods/select", "GET", {
      name: this.data.inputValue,
      city: wx.getStorageSync('cityName') || "北京"
    },
      (res) => {
        // 成功调用
        console.log("res=", res)
        this.setData({
          shopList: res.data.data
        })
      },
      (error) => {
        // 失败调用
        console.log("error=", error)
      },
      () => {
        // 完成调用
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})