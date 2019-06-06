// pages/minejs/js/addjs/addjs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "area": [
      {
          "area_id": "1",
          "area_name": "江西"
      },
      {
          "area_id": "2",
          "area_name": "西北"
      },
      {
          "area_id": "3",
          "area_name": "西南"
      },
      {
          "area_id": "4",
          "area_name": "陕西"
      },
      {
          "area_id": "5",
          "area_name": "云贵"
      },
      {
          "area_id": "6",
          "area_name": "四川"
      },
      {
          "area_id": "7",
          "area_name": "重庆"
      },
      {
          "area_id": "8",
          "area_name": "新疆"
      },
      {
        "area_id": "9",
        "area_name": "华北"
      },
      {
        "area_id": "10",
        "area_name": "河北"
      },
      {
        "area_id": "11",
        "area_name": "天津"
      },
      {
        "area_id": "12",
        "area_name": "东北"
      },
      {
        "area_id": "13",
        "area_name": "北京"
      },
      {
        "area_id": "14",
        "area_name": "内蒙古"
      },
      {
        "area_id": "15",
        "area_name": "辽宁"
      },
      {
        "area_id": "16",
        "area_name": "吉林"
      },
      {
        "area_id": "17",
        "area_name": "黑龙江"
      },
      {
        "area_id": "18",
        "area_name": "河南"
      },
      {
        "area_id": "19",
        "area_name": "山东"
      },
      {
        "area_id": "20",
        "area_name": "山西"
      },
      {
        "area_id": "21",
        "area_name": "广东"
      },
      {
        "area_id": "22",
        "area_name": "广西"
      },
      {
        "area_id": "23",
        "area_name": "湖南"
      },
      {
        "area_id": "24",
        "area_name": "湖北"
      },
      {
        "area_id": "25",
        "area_name": "上海"
      },
      {
        "area_id": "26",
        "area_name": "江苏"
      },
      {
        "area_id": "27",
        "area_name": "浙江"
      },
      {
        "area_id": "28",
        "area_name": "安徽"
      },
      {
        "area_id": "29",
        "area_name": "福建"
      }
  ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'#',
      data: {},
      header: {
        'content-type': 'application/json' 
      },
      success(){
        var daquList = res.data.area;
        var daquArr = daquList.map(item => {　　　　// 此方法将大区名称区分到一个新数组中
          return item.area_name;
        });
        that.setData({
          multiArray: [daquArr, []],　　　　
          daquList,
          daquArr
        })
        var default_daqu_id = daquList[0]['area_id'];　　　　//获取默认的大区对应的 area_id
        if (default_daqu_id) {
          that.searchClassInfo(default_daqu_id)　　　　　　// 如果存在调用获取对应的大区数据
        }
      }
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