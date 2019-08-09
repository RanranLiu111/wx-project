import {
  HTTP
} from '../utils/http-p';

class BookModel  extends HTTP{
  getHotList (){
    return this.request({
     url:'/book/hot_list',
    })
  }

  getMyBookCount(){
    return this.request({
      url:'/book/getFavorCount'
    })
  }
}

export {BookModel}