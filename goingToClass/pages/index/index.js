// pages/index/index.js
var app = getApp()
// 计数器
let interval = null
// 旋转速度
let intime = 50
Page({
  /**
   * 页面的初始数据
   */
  data: {
    color: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
    images: ['/images/likequ.png', '/images/fiveminutes.png', '/images/thirtyminutes.png', '/images/likequ.png', '/images/onehour.png', '/images/fiveminutes.png', '/images/likequ.png', '/images/buqu.png'],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck: 'clickLuck',
    luckPosition: 0
  },
  loadAnimation() {
    let self = this
    let index = 0
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        self.data.color[7] = 0.5
      } else if (index !=0) {
        self.data.color[index-1] = 0.5
      }
      self.data.color[index] = 1
      self.setData({
        color: self.data.color
      })
      index++
    },100)
  },
  clickLuck() {
    let self = this
    // 设置按钮不可点击
    self.setData({
      btnconfirm: '/images/bunengdianji.png',
      clickLuck: '',
      luckPosition: parseInt(Math.random()*8)
    })
    // 产生随机数
    // 清空定时器
    clearInterval(interval)
    let index = 0
    interval = setInterval(() => {
      if (index > 7) {
        index = 0
        self.data.color[7] = 0.5
      } else if (index !=0) {
        self.data.color[index-1] = 0.5
      }
      self.data.color[index] = 1
      self.setData({
        color: self.data.color
      })
      index++
    },intime)
    setTimeout(() => {
      self.stop(self.data.luckPosition)
    },2000)
  },
  stop(which) {
    let self = this
    clearInterval(interval)
    // 初始化当前位置
    let current = -1
    let color = self.data.color
    for(let i=0;i<color.length;i++) {
      if(color[i] == 1) {
        current = i
      }
    }
    let index = current + 1
    self.stopLuck(which, index, intime, 10)
  },
  stopLuck(which, index, time, splittime) {
    let self = this
    let color = self.data.color
    setTimeout(() => {
      if(index > 7) {
        index = 0
        color[7] = 0.5
      } else if (index != 0) {
        color[index - 1] = 0.5
      }
      color[index] = 1
      self.setData({
        color
      })
      if (time < 400 || index != which) {
        splittime++
        time +=splittime
        index++
        self.stopLuck(which, index, time, splittime)
      } else {
        setTimeout(() => {
          if (which == 0 || which == 3 || which == 6) {
            wx.showModal({
              title: '提示',
              content: '别偷懒，立刻去上课',
              showCancel: false,
              success(res) {
                self.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck'
                })
                self.loadAnimation()
              }
            })
          } else if (which == 1 || which == 5) {
            wx.showModal({
              title: '提示',
              content: '五分钟后再去上课，点击确定开始计时',
              showCancel: false,
              success(res) {
                wx.switchTab({
                  url:"/pages/clock/clock",
                  success: function(res) {
                    getApp().globalData.number = 1;
                    getApp().globalData.numbers = 1;
                    getApp().globalData.remainTime = 300000;
                  }
                })
              }
            })
          } else if (which == 2) {
            wx.showModal({
              title: '提示',
              content: '三十分钟后再去上课，点击确定开始计时',
              showCancel: false,
              success(res) {
                wx.switchTab({
                  url:"/pages/clock/clock",
                  success: function(res) {
                    getApp().globalData.number = 2;
                    getApp().globalData.numbers = 2;
                    getApp().globalData.remainTime = 1800000;
                  }
                })
              }
            })
          } else if (which == 4) {
            wx.showModal({
              title: '提示',
              content: '一小时后再去上课，点击确定开始计时',
              showCancel: false,
              success(res) {
                wx.switchTab({
                  url:"/pages/clock/clock",
                  success: function(res) {
                    getApp().globalData.number = 3;
                    getApp().globalData.numbers = 3;
                    getApp().globalData.remainTime = 3600000;
                  }
                })
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '今天有点累，就不去上课了吧',
              showCancel: false,
              success(res) {
                self.setData({
                  btnconfirm: '/images/dianjichoujiang.png',
                  clickLuck: 'clickLuck',
                })
                self.loadAnimation()
              }
            })
          }
        },1000)
      }
    },time)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadAnimation();
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