// pages/shopping/shopping.js
const fs = require("../../utils/food")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 购物车列表
    shoplist: [],
    // 是否显示删除按钮
    isRemove: false,
    // 手指触摸开始的x轴坐标
    startX: 0,
    // 手指触摸开始的y轴坐标
    startY: 0,
    // 最终移动的x轴坐标
    endX: 0,
    // 最终移动的y轴坐标
    endY: 0,
  },

  // 点击显示删除按钮
  onRemove(e) {
    const newShopList = this.data.shoplist.filter((item, index) => {
      if (e.currentTarget.dataset.id === index) {
        item.isRemove = !item.isRemove
      }
      return item
    })
    this.setData({
      shoplist: [...newShopList]
    })
  },

  // 手指触摸开始事件
  touchstart(e) {
    // console.log("触摸开始x=", e.changedTouches[0].clientX, "触摸开始y=", e.changedTouches[0].clientY)
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
    })
  },

  // 手指触摸后移动事件
  touchmove(e) {
    // console.log("移动开始x=", e.changedTouches[0].clientX, "移动开始y=", e.changedTouches[0].clientY)
    this.setData({
      endX: e.changedTouches[0].clientX,
      endY: e.changedTouches[0].clientY,
    })
    console.log(this.data.startX)
    console.log(this.data.endX)
  },

  // 防抖函数
  debounced(fn, delay) {
    let timer = null
    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.call()
      }, 500)
    }
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
    this.setData({
      shoplist: fs
    })
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