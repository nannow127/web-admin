//让打包的时候输出可配置的文件
var GenerateAssetPlugin = require('generate-asset-webpack-plugin'); 
var createServerConfig = function (compilation) {
    // 打包时把配置文件抽成单独的json文件
    const userConfig = require(`./src/config/index.js`);
    console.log(userConfig,'userConfig')
    // userConfig.url = {
    //     // 接口请求地址
    //     ApiUrl: url,
    //   };
    // let cfgJson = {
    //     // 接口请求地址
    //     ApiUrl: url,
    //   }
    let cfgJson =  userConfig.baseUrl
 return JSON.stringify(cfgJson);
}
module.exports = {
    //   baseUrl: '',
    filenameHashing: true,
    configureWebpack: {
        plugins: [
            new GenerateAssetPlugin({
                filename: 'serverconfig.json',
                fn: (compilation, cb) => {
                  cb(null, createServerConfig(compilation));
                },
                extraFiles: []
              })
            
        ],
    }
}