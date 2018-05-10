/**
 * 获取向量长度
 * @param {Object} 向量
 */
const getVLength = (v) => {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

/**
 * 点积
 * @param {Object} v1
 * @param {Object} v2
 */
const getDotProduct = (v1, v2) => {
    return v1.x * v2.x + v1.y * v2.y;
}

/**
 * 向量夹角(弧度)
 * @param {Object} v1
 * @param {Object} v2
 */
const getRadian = (v1, v2) => {
    var mr = getVLength(v1) * getVLength(v2);
    if (mr === 0) return 0;
    var r = getDotProduct(v1, v2) / mr;
    if (r > 1) r = 1;
    return Math.acos(r);
}

/**
 * 求旋转方向
 * 顺时针/逆时针
 */
const getCross = (v1, v2) => {
    return v1.x * v2.y - v2.x * v1.y;
}

/**
 * 向量夹角(角度)
 * @param {Object} v1
 * @param {Object} v2
 */
const getAngle = (v1, v2) => {
    var angle = getRadian(v1, v2);
    if (getCross(v1, v2) > 0) {
        angle *= -1;
    }
    return angle * 180 / Math.PI;
}

export {
    getVLength,
    getDotProduct,
    getRadian,
    getCross,
    getAngle
};