// pages/select-city/select-city.js
const request = require("../../utils/request")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前所在城市
    currentCity: "定位",
    // 热门城市列表
    hotcityList: [],
    // 经度
    longitude: 117.00739,
    // 纬度
    latitude: 39.14111,
  },
  // url, method, params, success, fail, complete

  // 获取热门城市
  getHotCity() {
    request("/api/hot/city", "GET", "",
    (res) => {
      // 成功回调
      // console.log("res=", res)
      this.setData({
        hotcityList: res.data.data,
      })
    },
    (error) => {
      // 失败回调
      console.log("error=", error)
    },
    () => {
      // 执行完成回调
    })
  },

  // 点击定位
  onLocation() {
    // 获取当前位置经纬度
    wx.getLocation({
      success: (res) => {
        // console.log("res=", res)
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        request("/api/lbs/location", "GET", {
          latitude: res.latitude,
          longitude: res.longitude
        },
        (r) => {
          // 成功回调
          console.log("r=", r)
          this.setData({
            currentCity: r.data.result.ad_info.city.slice(0, r.data.result.ad_info.city.length - 1)
          })
          app.globalData.cityName = this.data.currentCity
          wx.setStorageSync("cityName", this.data.currentCity)
          wx.switchTab({
            url: '/pages/diet/diet',
          })
        },
        (error) => {
          // 失败回调
          console.log("error=", error)
        },
        () => {
          // 完成回调
        })
      }
    })
  },

  // 选择热门城市
  onHotCity(city) {
    this.setData({
      currentCity: city.currentTarget.dataset.cityname
    })
    wx.setStorageSync('cityName', this.data.currentCity)
    app.globalData.cityName = this.data.currentCity
    wx.switchTab({
      url: '/pages/diet/diet',
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
    this.getHotCity()
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