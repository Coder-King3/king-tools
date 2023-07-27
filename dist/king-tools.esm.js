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

export { kingTools as default, getDataType };
