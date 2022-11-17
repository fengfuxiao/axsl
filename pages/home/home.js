// pages/home/home.js
const request = require("../../utils/request")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图滑块
    swiperImages: [],
    // 当前滑块index
    swiperItemCount: "",
    // 首页信息列表
    homeList: [],
  },

  // 获取轮播图数据
  onLoadSwiper() {
    const that = this
    request("/api/banner", "GET", "", (res) => {
      // 成功回调
      that.setData({
        swiperImages: res.data.data
      })
      that.setData({
        swiperItemCount: 1 + "/" + that.data.swiperImages.length
      })
    }, (error) => {
      // 失败回调
      console.log("error=", error)
    }, () => {
      // 执行完成回调
    })
    // wx.request({
    //   url: 'http://iwenwiki.com:3002/api/banner',
    //   method: "GET",
    //   success: function (res) {
    //     // console.log("res=", res.data.data)
    //     that.setData({
    //       swiperImages: res.data.data
    //     })
    //     that.setData({
    //       swiperItemCount: 1 + "/" + that.data.swiperImages.length
    //     })
    //   }
    // })
  },

  // 轮播图滑块改变
  changeSwiperItem(item) {
    // console.log("change", item.detail.current)
    this.setData({
      swiperItemCount: (item.detail.current + 1) + "/" + this.data.swiperImages.length
    })
  },

  // 获取信息列表数据
  getHomeList() {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    const that = this
    // url, method, params, success, fail, complete
    request("/api/indexlist", "GET", "", (res) => {
      // 成功回调
      that.setData({
        homeList: res.data.data
      })
    }, (error) => {
      // 失败回调
      console.log("出错", error)
    }, () => {
      // 执行完成回调
      setTimeout(() => {
        wx.showToast({
          title: '加载成功',
          icon: "success",
        })
        // wx.hideLoading()
      }, 500)
    })
    // wx.request({
    //   url: 'http://iwenwiki.com:3002/api/indexlist',
    //   method: "GET",
    //   success: function(res) {
    //     // console.log("res=", res.data.data)
    //     that.setData({
    //       homeList: res.data.data
    //     })
    //   },
    //   complete: function() {
    //     setTimeout(() => {
    //       wx.showToast({
    //         title: '加载成功',
    //         icon: "success",
    //       })
    //       // wx.hideLoading()
    //     }, 500)
    //   }
    // })
  },

  // 点击跳转到列表详情页
  onClickToDesc(e) {
    // console.log("跳转成功", e.currentTarget.dataset.itemid)
    wx.navigateTo({
      url: '../homelist/homelist?id=' + e.currentTarget.dataset.itemid,
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
    this.onLoadSwiper()
    this.getHomeList()
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