const paginationBev = Behavior({
  data:{
    dataArray:[],
    total:null
  },

  methods:{
    setMoreData(dataArray){
      const tempArray = this.data.dataArray.concat(dataArray);
      this.setData({
        dataArray:tempArray
      })
    },
    getCurrentStart(){
      return this.data.dataArray.length
    },

    setTotal(total){
      this.data.total = total
    },

    hasMore(){
      if(this.dataArray.length >= this.data.total){
        return false
      } 
      return true
    },
    initialize(){
      this.data.dataArray = []
      this.data.total = null
    }
  }
})

export { paginationBev}