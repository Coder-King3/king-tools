(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ktools = {}));
})(this, (function (exports) { 'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

}));
