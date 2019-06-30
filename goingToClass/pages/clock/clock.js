var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    numbers: 0,
    listData: [
      {
        id: 0,
        remainTime: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var number = app.globalData.number
      var numbers = app.globalData.numbers
      var remainTime = app.globalData.remainTime
      var key = 'listData[0].remainTime'
      this.setData({
          [key]: remainTime,
          number,
          numbers
      });
      this.setCountDown();
  },
  primary: function() {
    wx.switchTab({
        url:"/pages/index/index"
    })
  },
  primary_fq: function() {
    let self = this
    var key = 'listData[0].remainTime'
    self.setData({
      [key]: 0,
      number: 0
    })
  },
  /**
   * 倒计时
   */
  setCountDown: function(){ 
    let time = 1000;
    let { listData } = this.data;
    let list = listData.map((e) =>{
      if (e.remainTime <= 0) {
          e.remainTime = 0;
      }
      let formatTime = this.getFormat(e.remainTime);
      e.remainTime -= time;
      e.countDown = `${formatTime.mm}:${formatTime.ss}`;
      if (e.remainTime == 0) {
        wx.playBackgroundAudio({
          dataUrl: '/images/naozhong.mp3',
          title: '闹钟',
          coverImgUrl: ''
        })
        wx.showModal({
          title: '提示',
          content: '时间到啦!',
          showCancel: false,
          success(res) {
            wx.pauseBackgroundAudio()
          }
        })
      }
      return e;
    })
    this.setData({
        listData: list
    });
    setTimeout(this.setCountDown, time);
  },
  /**
   * 格式化时间
   */
  getFormat: function (msec){
    let ss = parseInt(msec / 1000);
    let ms = parseInt(msec % 1000);
    let mm = 0;
    let hh = 0;
    if (ss > 60) {
      mm = parseInt(ss / 60);
      ss = parseInt(ss % 60);
      if (mm > 60) {
        hh = parseInt(mm / 60);
        mm = parseInt(mm % 60);
      }
    }
    ss = ss > 9 ? ss : `0${ss}`;
    mm = mm > 9 ? mm : `0${mm}`;
    hh = hh > 9 ? hh : `0${hh}`;
    return { ms, ss, mm, hh };
  }
})