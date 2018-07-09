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
import * as React from 'react';
import './CustomButton.css';
var CustomButton = /** @class */ (function (_super) {
    __extends(CustomButton, _super);
    function CustomButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomButton.prototype.render = function () {
        return (React.createElement("button", { className: "custombutton", style: { height: this.props.height, width: this.props.width } }));
    };
    return CustomButton;
}(React.Component));
export { CustomButton };
//# sourceMappingURL=CustomButton.js.map