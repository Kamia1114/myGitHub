var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* name;
*/
var whaleUnit = /** @class */ (function (_super) {
    __extends(whaleUnit, _super);
    function whaleUnit(data) {
        var _this = _super.call(this, data.baseUnit) || this;
        _this._wData = data;
        return _this;
    }
    whaleUnit.prototype._init = function (data) {
        _super.prototype._init.call(this, data);
    };
    whaleUnit.prototype._update = function (info) {
        for (var key in info) {
            this["_" + key] = info[key];
        }
    };
    return whaleUnit;
}(baseUnit));
//# sourceMappingURL=whaleUnit.js.map