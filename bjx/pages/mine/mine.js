// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      avatarUrl:"",//用户头像
      nickName:"",//用户昵称
    }
  },
  add_address_fun:function(){
    wx.navigateTo({
      url: 'add_address/add_address',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    /**
     * 获取用户信息
     */
    wx.getUserInfo({
      success:function(res){
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    })
  },
  openConfirm: function () {
    wx.showModal({
        title: '下载APP使用大神功能',
        content: '请先下载北极熊电竞 APP，在 APP 内登陆即可使用大神相关功能',
        confirmText: "下载APP",
        confirmColor: "#000",
        cancelText: "取消",
        cancelColor: "#000",
        success: function (res) {
            console.log(res);
            if (res.confirm) {
              wx.navigateTo({
                url: '../weixinlink/xiazailink/xiazailink'
              })
            }else{
                console.log('取消')
            }
        }
    });
},
  loadApp: function() {
    wx.navigateTo({
      url: '../weixinlink/xiazailink/xiazailink'
    })
  },
  set: function() {
    wx.navigateTo({
      url: '../set/set'
    })
  },
  minejs: function() {
    wx.navigateTo({
      url: '../minejs/minejs'
    })
  },
  help: function() {
    wx.navigateTo({
      url: '../help/help'
    })
  },
  invitation: function() {
    wx.navigateTo({
      url: '../weixinlink/invitationlink/invitationlink'
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