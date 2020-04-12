var myAtoi = function(str) {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 -1;
    str = str.match(/^\s*([-+]?\d+)/);
    let strNum = str ? Number(str[0]) : 0;
    if (strNum < INT_MIN) {
        return INT_MIN;
    }
    else if (strNum > INT_MAX) {
        return INT_MAX;
    }
    else {
        return strNum;
    }
};