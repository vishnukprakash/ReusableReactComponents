import { OrganisationImpl } from "./interfaces/OrganisationImpl";
var Identifier = /** @class */ (function () {
    function Identifier() {
    }
    Identifier.prototype.identifyOrganisation = function (person) {
        return new OrganisationImpl();
    };
    return Identifier;
}());
export { Identifier };
//# sourceMappingURL=Identifier.js.map