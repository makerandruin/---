// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texts: "点击按钮，触发事件",
    text_bind:"bind",
    text_catch:"catch",
    button_name_1: "开始点击按钮",
    button_name_2: "点击按钮并移动",
    button_name_3: "结束点击按钮",
    button_name_4: "快速点击按钮",
    button_name_5: "点击长按按钮",

    button_name_6: "复位",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  longtap:function(){
    console.log("longtap"),
    this.setData({
      button_name_5:"当前状态：长按按钮"
    })
  },
  restoration:function(){
    console.log("restoration"),
    this.setData({
      button_name_1: "开始点击按钮",
      button_name_2: "点击按钮并移动",
      button_name_3: "结束点击按钮",
      button_name_4: "快速点击按钮",
      button_name_5: "点击长按按钮",
    })
  },
  tap:function(){
    console.log("tap"),
    this.setData({
      button_name_4:"当前状态：点击后离开"
    })
  },
  end:function(){
    console.log("end"),
    this.setData({
      button_name_3:"当前状态：结束按键"
    })
  },
  start:function(){
    console.log("start"),
    this.setData({
       button_name_1:"当前状态：按下按钮"
    })
  },
  move:function(){
    console.log("move"),
    this.setData({
      button_name_2:"当前状态：按下按钮移动"
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