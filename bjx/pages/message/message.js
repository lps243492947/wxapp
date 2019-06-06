// pages/message/message.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["公告", "私信"],
    long: 0,
    activeIndex: 0,
    sliderOffset: 0,
    nowDate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    this.setData({
      nowDate: util.formatTime(new Date())
    });
    wx.getSystemInfo({
        success: function(res) {
            that.setData({
              long: wx.getSystemInfoSync().windowWidth / 2,
              sliderLeft: that.data.tabs.length / 2,
              sliderOffset: that.data.tabs.length
            });
        }
    });
  },
  tabClick: function (e) {
    this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
    });
},
  jump: function() {
    wx.navigateTo({
      url: '../weixinlink/weixinlink/weixinlink'
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})