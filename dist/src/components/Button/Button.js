"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            _this.props.onClick();
        };
        _this.state = {};
        return _this;
    }
    Button.prototype.render = function () {
        var defaultStyles = {
            root: {
                padding: '10px'
            }
        };
        var styles = Object.assign({}, defaultStyles, this.props.styles);
        return (React.createElement("button", { type: "button", className: "btn btn-default", style: __assign({}, defaultStyles.root), onClick: this.onClick }, this.props.children));
    };
    return Button;
}(React.Component));
exports["default"] = Button;
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAAA,6BAA+B;AAiB/B;IAAoC,0BAAyC;IAC3E,gBAAY,KAAkB;QAA9B,YACE,kBAAM,KAAK,CAAC,SAIb;QAEC,aAAO,GAAG;YACN,KAAI,CAAC,KAAK,CAAC,OAAO,EAAE,CAAC;QACzB,CAAC,CAAA;QANG,KAAI,CAAC,KAAK,GAAG,EAChB,CAAA;;IACH,CAAC;IAMC,uBAAM,GAAN;QAEI,IAAI,aAAa,GAAiB;YAC9B,IAAI,EAAE;gBACF,OAAO,EAAE,MAAM;aAClB;SACJ,CAAA;QAED,IAAI,MAAM,GAAG,MAAM,CAAC,MAAM,CAAC,EAAE,EAAE,aAAa,EAAE,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC;QAEjE,OAAO,CACH,gCAAQ,IAAI,EAAC,QAAQ,EAAC,SAAS,EAAC,iBAAiB,EAAC,KAAK,eAAM,aAAa,CAAC,IAAI,GAAG,OAAO,EAAE,IAAI,CAAC,OAAO,IACnG,IAAI,CAAC,KAAK,CAAC,QAAQ,CACd,CACZ,CAAC;IACN,CAAC;IACL,aAAC;AAAD,CAAC,AA5BD,CAAoC,KAAK,CAAC,SAAS,GA4BlD"}