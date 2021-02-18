const methods = {
    /**
    * @name 判断显示隐藏
    * @return {boolean} true / false
    */
    isShow: (one, two) => { 
        if (one === two) {
        return true
        } else {
        return false
        }
    },
    /** 
    * @name 封装地址栏截取方法
    * @return {string} 
    */
     requestURL: (QueryString) => {
        var strHref =  window.location.href; // 'https://www.baidu.com/?instant_token_v3=v3043836899a25450195785fdfe6960e6c&type=1' //
        var strParm = ""
            // let ceshi = 'https://www.baidu.com/?instant_token_v3=v3043836899a25450195785fdfe6960e6c'
        if (strHref.search(/\?/) != -1) {
            strHref = strHref.substr(strHref.search(/\?/) + 1);
            strHref = strHref.split(/&/)
            for (var icount = 0; icount < strHref.length; icount++) {
            if (strHref[icount].search("^" + QueryString + "=") != -1) {
                strParm = strHref[icount].substr(QueryString.length + 1)
            }
            }
            return (strParm)
        }
        return (strParm)
    },
    /** 
     * @name 判断是否为空
     * @return {number} 
     */
    isNull: (item) => {
        if (item instanceof Array && item.length === 0) return true
        if (item === undefined) return true
        if (item === null) return true
        if (item === '') return true
        if (item === 'undefined') return true
        if (item === 'null') return true
        return false
    },
    /** 
     * @name 判断是否不为空
     * @return {number} 
     */
    isNotNull: (item) => {
        return !methods.isNull(item)
    },
    /** 
     * @name 查找元素在数组中的位置
     * @return {number} 下标
     */
     getItemIndex: (list, item) => {
        let index = -1
        list.forEach((v, i) => {
        if (v.id === item) {
            index = i
        }
        })
        return index
    },
    showMess(type, message) {
      return this.$message({
        message,
        type,
        duration: 5 * 1000
      })
    },
    borderTableData:(des, code) => {
      const desCode = []
      for (let c in code) {
        if (code[c] === '') {
          code[c] = '-暂无-'
        }
        for (let d in des) {
          if (c === d) {
            desCode.push({ name: des[d], code: code[c],w})
          }
        }
      }
      return desCode
    }
}
export default methods