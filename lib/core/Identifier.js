import { OrganisationImpl } from "./interfaces/OrganisationImpl";
var Identifier = /** @class */ (function () {
    function Identifier() {
    }
    Identifier.prototype.identifyOrganisation = function (person) {
        return new OrganisationImpl(7777777, "My test organisation");
    };
    return Identifier;
}());
export { Identifier };
//# sourceMappingURL=Identifier.js.map