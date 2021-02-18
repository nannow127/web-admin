const add0 = (number) => {
    return number >= 10 ? number : `0${number}`
}
const number = {
    /**
    * @name 验证正整数
    * @return {number} 
    */
    validateNum: (value) => {
        const reg = /^[1-9][0-9]*$/
        return reg.test(value)
    },
    /**
    * @name 手机号
    * @return {number} 
    */
	mobile: (tel) => {
		return /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(tel);
	},
     /**
     * @name 格式化数字
     * @return {number}
     *  formatNumber(12345.999,'#,##0.00')
     * formatNumber(12345.999,'#,##0.##')
     * formatNumber(123,'000000')
     */
    formatNumber: (v, pattern) => { 
        if (v == null)
            return v;
        var strarr = v ? v.toString().split('.') : ['0'];
        var fmtarr = pattern ? pattern.split('.') : [''];
        var retstr = '';
        // 整数部分   
        var str = strarr[0];
        var fmt = fmtarr[0];
        var i = str.length - 1;
        var comma = false;
        for (var f = fmt.length - 1; f >= 0; f--) {
            switch (fmt.substr(f, 1)) {
                case '#':
                    if (i >= 0) retstr = str.substr(i--, 1) + retstr;
                    break;
                case '0':
                    if (i >= 0) retstr = str.substr(i--, 1) + retstr;
                    else retstr = '0' + retstr;
                    break;
                case ',':
                    comma = true;
                    retstr = ',' + retstr;
                    break;
            }
        }
        if (i >= 0) {
            if (comma) {
                var l = str.length;
                for (; i >= 0; i--) {
                    retstr = str.substr(i, 1) + retstr;
                    if (i > 0 && ((l - i) % 3) == 0) retstr = ',' + retstr;
                }
            }
            else retstr = str.substr(0, i + 1) + retstr;
        }
        retstr = retstr + '.';
        // 处理小数部分   
        str = strarr.length > 1 ? strarr[1] : '';
        fmt = fmtarr.length > 1 ? fmtarr[1] : '';
        i = 0;
        for (var f = 0; f < fmt.length; f++) {
            switch (fmt.substr(f, 1)) {
                case '#':
                    if (i < str.length) retstr += str.substr(i++, 1);
                    break;
                case '0':
                    if (i < str.length) retstr += str.substr(i++, 1);
                    else retstr += '0';
                    break;
            }
        }
        return retstr.replace(/^,+/, '').replace(/\.$/, '')
    },
    /**
     * 
     * @name 格式化数字
     * @param {number | string} val 要格式化的数字或字符串
     * @param {boolean} hasUnit 是否需要单位  （万，亿）
     * @param {number} precision 数字精度
     * @param {boolean} isRoundUp 数字精度取舍，是否四舍五入
     * @param {boolean} hasSeparator 是否有千分位分隔符
     * @param {string} separator 分隔符
     * @param {boolean} isMagnitude 是否数量级转换
     * @param {boolean} unitType 设置单位类型，可单独设置为 万 亿，支持 auto w y
     */
    formatAmount: ({
        val,
        hasUnit = true,
        precision = 2,
        isRoundUp = true,
        hasSeparator = true,
        separator = ",",
        isMagnitude = true,
        unitType = "auto"
    }) => {
        if (!isNum(val)) return val;
        let num = Math.abs(val);
        let unit = "";
        let minus = val < 0 ? "-" : "";
        // 单位转换
        if (isMagnitude) {
            const res = getUnitConversion(num, unit, unitType);
            num = res.num;
            unit = res.unit;
        }
        // 精度计算
        if (isRoundUp) {
            num = num.toFixed(precision);
        }
        // 如果需要千分位分隔符
        if (hasSeparator) {
            num = getSepatatorNum(num, precision, separator);
        }
        // 如果需要单位
        if (isMagnitude && hasUnit) {
            num = num + unit;
        }
        // 正负
        if (minus) {
            num = minus + num;
        }
        return num;
    },
    // 是否是数字格式
    isNum: (val) => {
        const reg = /^[-|\d]?\d*\.?\d*\d$/g;
        return reg.test(val);
    },
    // 单位转换
    getUnitConversion: (num, unit, unitType) => {

        let len = Math.floor(num).toString().length;
        switch (unitType) {
            case "auto":
                if (len > 4 && len <= 8) {
                    unit = "万";
                    num = num / 10 ** 4;
                } else if (len > 8) {
                    unit = "亿";
                    num = num / 10 ** 8;
                } else {
                    unit = "";
                }
                break;
            case "w":
                unit = "万";
                num = num / 10 ** 4;
                break;
            case "y":
                unit = "亿";
                num = num / 10 ** 8;
                break;
        }
        return { unit, num };
    },
    // 格式化成千分位数字
    getSepatatorNum: (num, precision, separator) => {
        let temp = num
            .toString()
            .slice(0, Number(`-${precision + 1}`))
            .split("");
        let pointNum = num.slice(Number(`-${precision + 1}`));
        let len = temp.length;
        while (len > 3) {
            temp.splice(len - 3, 0, separator);
            len -= 3;
        }
        return temp.join("") + pointNum;
    },
}
// console.log(formatAmount({ val: 3775826416 }))

export default number


