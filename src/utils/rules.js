
const add0 = (number) => {
    return number >= 10 ? number : `0${number}`
}
const rules = {
    // ceshi:() => {
    //     const now = new Date();
    //     return `${now.getFullYear()}年${add0(now.getMonth() + 1)}月${add0(now.getDate())}日`
    // }
    // 手机号
	mobile: (tel) => {
		return /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(tel);
	},
	// input输入框只能输入数字 和 小数点后两位
	num: (obj,val) => {
		obj.value = obj.value.replace(/[^\d.]/g,""); //清除"数字"和"."以外的字符
		obj.value = obj.value.replace(/^\./g,""); //验证第一个字符是数字
		obj.value = obj.value.replace(/\.{2,}/g,""); //只保留第一个, 清除多余的
		obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'); //只能输入两个小数
	}
}
export default rules