(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('pyronlaboratory-core', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['pyronlaboratory-core'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/pyronlaboratory-core.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PyronlaboratoryCoreService = /** @class */ (function () {
        function PyronlaboratoryCoreService() {
        }
        PyronlaboratoryCoreService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PyronlaboratoryCoreService.ctorParameters = function () { return []; };
        /** @nocollapse */ PyronlaboratoryCoreService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function PyronlaboratoryCoreService_Factory() { return new PyronlaboratoryCoreService(); }, token: PyronlaboratoryCoreService, providedIn: "root" });
        return PyronlaboratoryCoreService;
    }());

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
            { type: core.Component, args: [{
                        selector: 'lib-pyronlaboratory-core',
                        template: "\n    <p>\n      pyronlaboratory-core works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PyronlaboratoryCoreComponent.ctorParameters = function () { return []; };
        return PyronlaboratoryCoreComponent;
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
            { type: core.NgModule, args: [{
                        declarations: [PyronlaboratoryCoreComponent],
                        imports: [],
                        exports: [PyronlaboratoryCoreComponent]
                    },] }
        ];
        return PyronlaboratoryCoreModule;
    }());

    exports.PyronlaboratoryCoreComponent = PyronlaboratoryCoreComponent;
    exports.PyronlaboratoryCoreModule = PyronlaboratoryCoreModule;
    exports.PyronlaboratoryCoreService = PyronlaboratoryCoreService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=pyronlaboratory-core.umd.js.map
