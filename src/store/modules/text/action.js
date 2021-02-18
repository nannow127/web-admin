import getUrl from '@/api/index.js'
import { postRequest } from '@/service/request'

export default {
    async tradeRank({ commit }, params) {
    let reqUrl = getUrl('text', 'tradeRank')
    let res = await postRequest(reqUrl, params)
    commit('SET_SITE_TABLE_TOTAL',2453)
        
    return res
  }
}
