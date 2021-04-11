Page({
  data: {
    logs:[]
  },

onLoad:function(){
    this.getdata();
},

getdata:function(){
    var that=this;
    wx.request({
      url:'https://www.yxlyl.cn/wx2/',
      data:{name:"2"},
      method:"GET",
      success:function(res){
　　　　   that.setData({
　　　　　     logs:res.data
　　　　　 })
      },
    })
  },
})