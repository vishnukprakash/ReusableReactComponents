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
var CustomSelectItem = /** @class */ (function (_super) {
    __extends(CustomSelectItem, _super);
    function CustomSelectItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomSelectItem.prototype.render = function () {
        return (React.createElement("select", { style: { height: this.props.height, width: this.props.width } },
            React.createElement("option", null, "option-1"),
            React.createElement("option", null, "option-2"),
            React.createElement("option", null, "option-3"),
            React.createElement("option", null, "option-4"),
            React.createElement("option", null, "option-5")));
    };
    return CustomSelectItem;
}(React.Component));
export { CustomSelectItem };
//# sourceMappingURL=CustomSelectItem.js.map