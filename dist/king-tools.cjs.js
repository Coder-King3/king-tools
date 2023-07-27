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

var kingTools = {
    getDataType: getDataType,
};

exports.default = kingTools;
exports.getDataType = getDataType;
