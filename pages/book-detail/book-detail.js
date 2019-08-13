
import {BookModel} from '../../modules/book.js';
import {LikeModel} from '../../modules/like.js';
const bookModel = new BookModel();
const likeModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comments:[],
    book:null,
    likeStatus:false,
    likeCount:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bid = options.bid;
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likeStatus = bookModel.getLikeStatus(bid)
    detail.then((res)=>{
      console.log('book,',res)
      this.setData({
        book:res
      })
    })

    comments.then((res)=>{
      console.log('commnets,',res)
      this.setData({
        comments: res.comment
      })
    })

    likeStatus.then((res)=>{
      console.log('like,',res)
      this.setData({
        likeStatus:res.like_status,
        likeCount: res.fav_nums
      })
    })
  },

  onLike(event){
    const like_or_cancel = event.detail.behavior;
    likeModel.like(like_or_cancel,this.data.book.id,400)
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