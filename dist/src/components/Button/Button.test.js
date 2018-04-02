"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Button_1 = require("./Button");
var control;
var myMock = jest.fn();
var buttonText = "Click Me!";
beforeEach(function () {
    return control = enzyme_1.shallow(React.createElement(Button_1["default"], { onClick: myMock }, buttonText));
});
describe("Button", function () {
    it("Should render without error", function () {
        expect(control.length).toBe(1);
    });
    it("Should render as a single button control", function () {
        expect(control.find('button').length).toBe(1);
    });
    it("Should show the passed text", function () {
        expect(control.find('button').text().length).toBe(buttonText.length);
    });
    it("Should call a function on click", function () {
        control.find('button').simulate('click');
        expect(myMock.mock.calls.length).toBe(1);
    });
    it("Should be clickable more than once", function () {
        control.find('button').simulate('click');
        expect(myMock.mock.calls.length).toBe(2);
    });
});
//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAAA,6BAA+B;AAC/B,iCAA+D;AAE/D,mCAA8B;AAE9B,IAAI,OAA4C,CAAC;AACjD,IAAI,MAAM,GAAG,IAAI,CAAC,EAAE,EAAE,CAAC;AACvB,IAAI,UAAU,GAAG,WAAW,CAAC;AAE7B,UAAU,CAAC;IAEP,OAAA,OAAO,GAAG,gBAAO,CAAC,oBAAC,mBAAM,IAAC,OAAO,EAAE,MAAM,IAAG,UAAU,CAAU,CAAC;AAAjE,CAAiE,CAEpE,CAAC;AAEF,QAAQ,CAAC,QAAQ,EAAE;IACnB,EAAE,CAAC,6BAA6B,EAAE;QAC9B,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;IACnC,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,0CAA0C,EAAE;QAC3C,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;IAClD,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,6BAA6B,EAAE;QAC9B,MAAM,CAAC,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,IAAI,EAAE,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,UAAU,CAAC,MAAM,CAAC,CAAC;IACzE,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,iCAAiC,EAAE;QAClC,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,OAAO,CAAC,CAAC;QACzC,MAAM,CAAC,MAAM,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;IAC7C,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,oCAAoC,EAAE;QACrC,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC,QAAQ,CAAC,OAAO,CAAC,CAAC;QACzC,MAAM,CAAC,MAAM,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;IAC7C,CAAC,CAAC,CAAC;AACH,CAAC,CAAC,CAAC"}