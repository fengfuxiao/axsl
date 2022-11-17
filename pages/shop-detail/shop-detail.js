// pages/shop-detail/shop-detail.js
const request = require("../../utils/request")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品数据
    shopDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("options=", options)
    request("/api/foods/list/detail", "GET", {
      id: options.id,
    },
    (res) => {
      // 成功回调
      console.log("res=", res)
      this.setData({
        shopDetail: res.data.data[0]
      })
    },
    (error) => {
      // 失败回调
      console.log("error=", error)
    },
    () => {
      // 完成回调
    })
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