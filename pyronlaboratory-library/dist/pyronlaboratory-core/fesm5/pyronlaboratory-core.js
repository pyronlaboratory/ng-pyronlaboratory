import { Component, Pipe, Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PyronlaboratoryCoreComponent = /** @class */ (function () {
    function PyronlaboratoryCoreComponent() {
    }
    /**
     * @return {?}
     */
    PyronlaboratoryCoreComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PyronlaboratoryCoreComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-pyronlaboratory-core',
                    template: "\n    <h1 style=\"font-family: monospace;\">\n\tpyronlaboratory-core works!\n    </h1>\n  "
                }] }
    ];
    /** @nocollapse */
    PyronlaboratoryCoreComponent.ctorParameters = function () { return []; };
    return PyronlaboratoryCoreComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var PyronlaboratoryCorePipe = /** @class */ (function () {
    function PyronlaboratoryCorePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} exponent
     * @return {?}
     */
    PyronlaboratoryCorePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} exponent
     * @return {?}
     */
    function (value, exponent) {
        return Math.pow(value, isNaN(exponent) ? 1 : exponent);
    };
    PyronlaboratoryCorePipe.decorators = [
        { type: Pipe, args: [{ name: 'exponentialStrength' },] }
    ];
    return PyronlaboratoryCorePipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PyronlaboratoryCoreService = /** @class */ (function () {
    function PyronlaboratoryCoreService() {
    }
    PyronlaboratoryCoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PyronlaboratoryCoreService.ctorParameters = function () { return []; };
    /** @nocollapse */ PyronlaboratoryCoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PyronlaboratoryCoreService_Factory() { return new PyronlaboratoryCoreService(); }, token: PyronlaboratoryCoreService, providedIn: "root" });
    return PyronlaboratoryCoreService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PyronlaboratoryCoreModule = /** @class */ (function () {
    function PyronlaboratoryCoreModule() {
    }
    PyronlaboratoryCoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [PyronlaboratoryCoreComponent, PyronlaboratoryCorePipe],
                    imports: [],
                    exports: [PyronlaboratoryCoreComponent, PyronlaboratoryCorePipe]
                },] }
    ];
    return PyronlaboratoryCoreModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: pyronlaboratory-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { PyronlaboratoryCoreComponent, PyronlaboratoryCoreModule, PyronlaboratoryCorePipe, PyronlaboratoryCoreService };
//# sourceMappingURL=pyronlaboratory-core.js.map
