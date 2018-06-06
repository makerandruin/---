// pages/index/index.js
var flag=1;
var a=1;
var color="window";
var texts="hello";
Page({
  data: {
    color:"window",//data need defind in this.
    texts:"hello(click me)",
  },
  click:function(){
    console.log('tap text');

    if (flag==1) {
      color = "window-red";
      console.log('window-red');
      texts="I am a geek";
      flag = 2;
    } else if(flag==2){
      texts = "This is a Demo about text color exchange";
      console.log('window-green');
      color = "window-green";
      flag = 3;
    } else {
      texts = "Thank for you play!";
      console.log('window-purple');
      color = "window-purple";
      flag=1;
    }
    this.setData({
      color,
      texts
    })
  },
  onLoad: function (options) {
   console.log('index onload')
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})