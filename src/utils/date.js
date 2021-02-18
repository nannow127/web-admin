
const add0 = (number) => {
    return number >= 10 ? number : `0${number}`
}
const date = {
    /** 
    * @name 获取今日日期
    * @return {string} YYYY年MM月DD日
    */
    getToday: () => {
        const now = new Date()
        return `${now.getFullYear()}年${add0(now.getMonth() + 1)}月${add0(now.getDate())}日`
    }

}
export default date

