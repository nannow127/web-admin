export default {
  methods: {
    pageMethod(e) {
      let pageList = {}
      if (e.pageSize !== undefined && e.pageNum !== undefined && e.total !== undefined) {
        pageList['pageSize'] = e.pageSize || 10
        pageList['pageNum'] = e.pageNum || 1
        pageList['total'] = e.total
      }
      console.log(pageList)
      this.pagination = pageList
    }
  }
}