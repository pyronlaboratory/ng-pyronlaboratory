/**
 * @fileoverview added by tsickle
 * Generated from: lib/pyronlaboratory-core.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*Following example has been forked from https://angular.io/guide/pipes#example-transforming-a-value-exponentially*/
import { Pipe } from '@angular/core';
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
export { PyronlaboratoryCorePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHlyb25sYWJvcmF0b3J5LWNvcmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3B5cm9ubGFib3JhdG9yeS1jb3JlLyIsInNvdXJjZXMiOlsibGliL3B5cm9ubGFib3JhdG9yeS1jb3JlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFVcEQ7SUFBQTtJQUtBLENBQUM7Ozs7OztJQUhDLDJDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFFBQWlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQUpGLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBQzs7SUFLbkMsOEJBQUM7Q0FBQSxBQUxELElBS0M7U0FKWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKkZvbGxvd2luZyBleGFtcGxlIGhhcyBiZWVuIGZvcmtlZCBmcm9tIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9waXBlcyNleGFtcGxlLXRyYW5zZm9ybWluZy1hLXZhbHVlLWV4cG9uZW50aWFsbHkqL1xyXG5cclxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vKlxyXG4gKiBSYWlzZSB0aGUgdmFsdWUgZXhwb25lbnRpYWxseVxyXG4gKiBUYWtlcyBhbiBleHBvbmVudCBhcmd1bWVudCB0aGF0IGRlZmF1bHRzIHRvIDEuXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHZhbHVlIHwgZXhwb25lbnRpYWxTdHJlbmd0aDpleHBvbmVudFxyXG4gKiBFeGFtcGxlOlxyXG4gKiAgIHt7IDIgfCBleHBvbmVudGlhbFN0cmVuZ3RoOjEwIH19XHJcbiAqICAgZm9ybWF0cyB0bzogMTAyNFxyXG4qL1xyXG5AUGlwZSh7bmFtZTogJ2V4cG9uZW50aWFsU3RyZW5ndGgnfSlcclxuZXhwb3J0IGNsYXNzIFB5cm9ubGFib3JhdG9yeUNvcmVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGV4cG9uZW50PzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnBvdyh2YWx1ZSwgaXNOYU4oZXhwb25lbnQpID8gMSA6IGV4cG9uZW50KTtcclxuICB9XHJcbn0iXX0=