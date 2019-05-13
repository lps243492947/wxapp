Component({
  /**
   * 组件的属性列表
   */
    properties: {
        propArray:{
            type:Array,
        }
    },
  /**
   * 组件的初始数据
   */
    data: {
        selectShow:false,
        nowText:"",
        animationData:{},
        selectArray: [{
            "id": "0",
            "text": "艾欧尼亚"
        }, {
            "id": "1",
            "text": "祖安"
        },{
            "id": "2",
            "text": "诺克萨斯"
        },{
            "id": "3",
            "text": "班德尔城"
        },{
            "id": "4",
            "text": "皮尔特沃夫"
        },{
            "id": "5",
            "text": "战争学院"
        },{
            "id": "6",
            "text": "巨神峰"
        },{
            "id": "7",
            "text": "雷瑟守备"
        },{
            "id": "8",
            "text": "裁决之地"
        },{
            "id": "9",
            "text": "黑色玫瑰"
        },{
            "id": "10",
            "text": "暗影岛"
        },{
            "id": "11",
            "text": "钢铁烈阳"
        },{
            "id": "12",
            "text": "均衡教派"
        },{
            "id": "13",
            "text": "水晶之痕"
        },{
            "id": "14",
            "text": "影流"
        },{
            "id": "15",
            "text": "守望之海"
        },{
            "id": "16",
            "text": "征服之海"
        },{
            "id": "17",
            "text": "卡拉曼达"
        },{
            "id": "18",
            "text": "比尔吉沃特"
        },{
            "id": "19",
            "text": "德玛西亚"
        },{
            "id": "20",
            "text": "弗雷尔卓德"
        },{
            "id": "21",
            "text": "无畏先锋"
        },{
            "id": "22",
            "text": "恕瑞玛"
        },{
            "id": "23",
            "text": "扭曲丛林"
        },{
            "id": "24",
            "text": "教育网专区"
        }]
    },
  /**
   * 组件的方法列表
   */
    methods: {
　　　//option的显示与否
        selectToggle:function(){
            var nowShow=this.data.selectShow;
            var animation = wx.createAnimation({
                timingFunction:"ease"
            })
            this.animation=animation;
            if(nowShow){
                animation.rotate(0).step();
                this.setData({
                    animationData: animation.export()
                })
            }else{
                animation.rotate(180).step();                
                this.setData({
                    animationData: animation.export()
                })
            }
            this.setData({
                selectShow: !nowShow
            })
        },
        //设置内容
        getDate:function(e){
            console.log(e.detail)
        },
        setText:function(e){
            var nowData = this.properties.selectArray;
            var nowIndx = e.target.dataset.index;
            var nowIdx = nowData[nowIndx].id;
            var nowText = nowData[nowIndx].text;
            this.animation.rotate(0).step();
            this.setData({
                selectShow: false,
                nowText:nowText,
                animationData: this.animation.export()
            })
            var nowDate={
                id:nowIdx,
                text:nowText
            }
            console.log(nowData);
            this.triggerEvent('myget', nowDate)
        }
    }
})