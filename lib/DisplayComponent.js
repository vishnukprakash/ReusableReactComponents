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
import { CustomButton } from './components/widgets/button/CustomButton';
import { CustomSelectItem } from './components/widgets/selectitem/CustomSelectItem';
import { CustomTextItem } from './components/widgets/textitem/CustomTextItem';
var DisplayComponent = /** @class */ (function (_super) {
    __extends(DisplayComponent, _super);
    function DisplayComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplayComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(CustomButton, { height: '25px', width: '100px' })),
            React.createElement("div", null,
                React.createElement(CustomTextItem, { height: '25px', width: '100px' })),
            React.createElement("div", null,
                React.createElement(CustomSelectItem, { height: '25px', width: '100px' }))));
    };
    return DisplayComponent;
}(React.Component));
export { DisplayComponent };
//# sourceMappingURL=DisplayComponent.js.map