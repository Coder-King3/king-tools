'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getDataType(target) {
    var type = typeof target;
    if (type === "object") {
        return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
    }
    else {
        return type;
    }
}
// 原始类型
function isString(target) {
    return getDataType(target) === "string";
}

/* type enum */
var sortType;
(function (sortType) {
    sortType["ASC"] = "ASC";
    sortType["DESC"] = "DESC";
})(sortType || (sortType = {}));
// 冒泡排序
function bubblingSort(array, // 需要排序的数组
type, // "ASC"(升序) or "DESC"(降序)
key // "key" is the Object[]:key (排序对象数组需要的比较的属性key)
) {
    var _a, _b, _c, _d;
    if (type === void 0) { type = sortType.ASC; }
    var length = array.length;
    if (length < 2)
        return array;
    if (key && isString(key)) {
        if (key.trim() === "")
            return array;
        if (type === sortType.ASC) {
            for (var i = 0; i < length - 1; i++) {
                for (var j = 0; j < length - 1 - i; j++) {
                    if (parseFloat(array[j][key]) > parseFloat(array[j + 1][key])) {
                        _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                    }
                }
            }
        }
        else if (type === sortType.DESC) {
            for (var i = 0; i < length - 1; i++) {
                for (var j = 0; j < length - 1 - i; j++) {
                    if (parseFloat(array[j][key]) < parseFloat(array[j + 1][key])) {
                        _b = [array[j + 1], array[j]], array[j] = _b[0], array[j + 1] = _b[1];
                    }
                }
            }
        }
    }
    else {
        if (type === sortType.ASC) {
            for (var i = 0; i < length - 1; i++) {
                for (var j = 0; j < length - 1 - i; j++) {
                    if (array[j] > array[j + 1]) {
                        _c = [array[j + 1], array[j]], array[j] = _c[0], array[j + 1] = _c[1];
                    }
                }
            }
        }
        else if (type === sortType.DESC) {
            for (var i = 0; i < length - 1; i++) {
                for (var j = 0; j < length - 1 - i; j++) {
                    if (array[j] < array[j + 1]) {
                        _d = [array[j + 1], array[j]], array[j] = _d[0], array[j + 1] = _d[1];
                    }
                }
            }
        }
    }
    return array;
}

var kingTools = {
    getDataType: getDataType,
    bubblingSort: bubblingSort,
};

exports.bubblingSort = bubblingSort;
exports.default = kingTools;
exports.getDataType = getDataType;
