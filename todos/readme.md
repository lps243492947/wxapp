- wxml 是模板，{{}} 是要被编译的模板，用户看到的不是wxml，是wxml被js里data填充编译后的页面 Page 不是 wxml + js + wxss合体
- setData({传入相应数据时}) 触发重新compile
- 我们会在wxml里把所有的逻辑及对数据的渴求都表达，在某一刻页面只会显示当前状态的页面状态 跟数据相关
    状态 由数据决定 改变数据，setData 界面自动变，叫做数据驱动的界面 MVVM
    数据要和界面状态一一对应

- todos
    健身
    表单
    js dom 加 todos [] appendChild
    data: {
        todos: []
    }
    form submit this.setData()

- {{js 运行区域}}
- input 有意思? => todos