// pages/diet/diet.js
const nl = require("../../utils/navlist")
const fs = require("../../utils/food")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 导航列表
    navList: nl,
    // 商品列表
    shopList: fs,
    // 当前所在城市
    currentCity: "",
  },

  // 点击进入产品分类列表
  onProduct(nav) {
    wx.navigateTo({
      url: '/pages/product/product?id=' + nav.currentTarget.dataset.navid,
    })
  },

  // 进入定位页面
  onLocation() {
    wx.navigateTo({
      url: '/pages/select-city/select-city',
    })
  },

  // 进入搜索页面
  onSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  // 进入商品详情页
  onShopDetail(e) {
    // console.log("e=", e.currentTarget.dataset.shopid)
    wx.navigateTo({
      url: '/pages/shop-detail/shop-detail?id=' + e.currentTarget.dataset.shopid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(this.data.navList)
    // console.log(this.data.shopList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // console.log(app.globalData.cityName)
    // console.log(this.data.currentCity)
    this.setData({
      currentCity: app.globalData.cityName
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // console.log("页面显示")
    this.setData({
      // currentCity: app.globalData.cityName,
      currentCity: wx.getStorageSync('cityName'),
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // console.log("页面隐藏")
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
    // console.log("下拉触底")
    this.setData({
      shopList: this.data.shopList.concat(this.data.shopList)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})