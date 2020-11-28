import { Component, Pipe, Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PyronlaboratoryCoreComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PyronlaboratoryCoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pyronlaboratory-core',
                template: `
    <h1 style="font-family: monospace;">
	pyronlaboratory-core works!
    </h1>
  `
            }] }
];
/** @nocollapse */
PyronlaboratoryCoreComponent.ctorParameters = () => [];

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
class PyronlaboratoryCorePipe {
    /**
     * @param {?} value
     * @param {?=} exponent
     * @return {?}
     */
    transform(value, exponent) {
        return Math.pow(value, isNaN(exponent) ? 1 : exponent);
    }
}
PyronlaboratoryCorePipe.decorators = [
    { type: Pipe, args: [{ name: 'exponentialStrength' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PyronlaboratoryCoreService {
    constructor() { }
}
PyronlaboratoryCoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PyronlaboratoryCoreService.ctorParameters = () => [];
/** @nocollapse */ PyronlaboratoryCoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PyronlaboratoryCoreService_Factory() { return new PyronlaboratoryCoreService(); }, token: PyronlaboratoryCoreService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PyronlaboratoryCoreModule {
}
PyronlaboratoryCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PyronlaboratoryCoreComponent, PyronlaboratoryCorePipe],
                imports: [],
                exports: [PyronlaboratoryCoreComponent, PyronlaboratoryCorePipe]
            },] }
];

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
