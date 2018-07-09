import { Identifier } from ".";
import { PersonImpl } from "./core/interfaces/PersonImpl";
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass.prototype.main = function () {
        var identifier = new Identifier();
        var organisation = identifier.identifyOrganisation(new PersonImpl());
        console.log(organisation);
    };
    return TestClass;
}());
export { TestClass };
//# sourceMappingURL=TestClass.js.map