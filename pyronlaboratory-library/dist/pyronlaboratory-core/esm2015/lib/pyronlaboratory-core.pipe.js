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
export class PyronlaboratoryCorePipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHlyb25sYWJvcmF0b3J5LWNvcmUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3B5cm9ubGFib3JhdG9yeS1jb3JlLyIsInNvdXJjZXMiOlsibGliL3B5cm9ubGFib3JhdG9yeS1jb3JlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7QUFXcEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBQ2xDLFNBQVMsQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypGb2xsb3dpbmcgZXhhbXBsZSBoYXMgYmVlbiBmb3JrZWQgZnJvbSBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvcGlwZXMjZXhhbXBsZS10cmFuc2Zvcm1pbmctYS12YWx1ZS1leHBvbmVudGlhbGx5Ki9cclxuXHJcbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLypcclxuICogUmFpc2UgdGhlIHZhbHVlIGV4cG9uZW50aWFsbHlcclxuICogVGFrZXMgYW4gZXhwb25lbnQgYXJndW1lbnQgdGhhdCBkZWZhdWx0cyB0byAxLlxyXG4gKiBVc2FnZTpcclxuICogICB2YWx1ZSB8IGV4cG9uZW50aWFsU3RyZW5ndGg6ZXhwb25lbnRcclxuICogRXhhbXBsZTpcclxuICogICB7eyAyIHwgZXhwb25lbnRpYWxTdHJlbmd0aDoxMCB9fVxyXG4gKiAgIGZvcm1hdHMgdG86IDEwMjRcclxuKi9cclxuQFBpcGUoe25hbWU6ICdleHBvbmVudGlhbFN0cmVuZ3RoJ30pXHJcbmV4cG9ydCBjbGFzcyBQeXJvbmxhYm9yYXRvcnlDb3JlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBleHBvbmVudD86IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5wb3codmFsdWUsIGlzTmFOKGV4cG9uZW50KSA/IDEgOiBleHBvbmVudCk7XHJcbiAgfVxyXG59Il19