// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'pp',
    scrollLeft: 10,
    isTag: 'pp',
    alltag: null,
    selectid: 0,
    //滚动的数组
    scrolls: [
      {
        name: '匹配模式',
        tag: 'pp',
        images: '../../images/xq.png'
      },
      {
        name: '极地大乱斗',
        tag: 'jd',
        images: '../../images/xq.png'
      },
      {
        name: '双人组排',
        tag: 'sp',
        images: '../../images/pl.png'
      },
      {
        name: '灵活组排',
        tag: 'lh',
        images: '../../images/pl.png'
      },
      {
        name: '战队排位',
        tag: 'zd',
        images: '../../images/plw.png'
      },
    ]
  },
  tagChoose:function(e){
    var self = this
    var tag = e.currentTarget.dataset.id;
    self.setData({
      isTag: tag
    })
  },
  primary: function(e) {
    var self = this
    wx.navigateTo({
      url: '../room/room'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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