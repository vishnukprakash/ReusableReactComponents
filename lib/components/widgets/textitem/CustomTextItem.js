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
var CustomTextItem = /** @class */ (function (_super) {
    __extends(CustomTextItem, _super);
    function CustomTextItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomTextItem.prototype.render = function () {
        return (React.createElement("input", { type: "text", style: { height: this.props.height, width: this.props.width } }));
    };
    return CustomTextItem;
}(React.Component));
export { CustomTextItem };
//# sourceMappingURL=CustomTextItem.js.map