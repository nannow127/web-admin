const ev = {
  dev: 'http://47.103.13.59:',
  // sit: 'http://172.16.6.222:',
}
export default {
  baseUrl: {
    dev: {
      default: `${ev.dev}7806`, // 默认40100， 但是后台发版会导致端口切换，所以还是要自己重新配置
    },
    // pro: {
    //   default: '/mdm-base',
    // },
    // public: ev.public
  }
}