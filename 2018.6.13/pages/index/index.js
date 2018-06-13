var a=1;
var text1;
var text2;
var text3;
var text4;
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     a,
     text1:"What are you want to know?",
     text2:"Who are you?",
     text3:"What is this?",
     text4:"I have no questise to you.",
  
  },
  first: function () {
    console.log('the first is active!');
    if (a == 4) {
      a = 1;
      console.log('the back one');
      text1 = "What are you want to know?";
      text2 = "Who are you?";
      text3 = "What is this?";
      text4 = "I have no questise to you.";
    }else if(a==1){
      a = 7;
      console.log('the who are you branch');
      text1 = "I am a student.";
      text2 = "Bless to you study hard.";
      text3 = " ";
      text4 = " ";
    }else if(a==7){
      a = 1;
      console.log('the back one');
      text1 = "What are you want to know?";
      text2 = "Who are you?";
      text3 = "What is this?";
      text4 = "I have no questise to you.";
    }else if(a==10){
      a = 1;
      console.log('the back one');
      text1 = "What are you want to know?";
      text2 = "Who are you?";
      text3 = "What is this?";
      text4 = "I have no questise to you.";
    }
    this.setData({
      a,
      text1,
      text2,
      text3,
      text4,
    });
  },
  second: function () {
    a+=1;
    console.log('the second is active!');
    if(a==2){
      console.log('the what is this branch');
      a = 11;
      text1 = "This is a text game";
      text2 = "Maybe...";
      text3 = " ";
      text4 = " ";
    }
    a -= 1;
    this.setData({
      a,
      text1,
      text2,
      text3,
      text4,
    });
  },
    thirdly:function(){
      a+=2;
      console.log('the thirdly is active!');
      if(a==3){
      console.log('the bless branch');
      text1="Ok,Good luck yo you!";
      text2="Thank for you bless.";
      text3=" ";
      text4=" ";
      a=6;
      }
      a -= 2;
      this.setData({
        a,
        text1,
        text2,
        text3,
        text4,
      });
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      a,
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