import { NgModule } from '@angular/core';

import { PyronlaboratoryCoreComponent } from './pyronlaboratory-core.component';
import { PyronlaboratoryCoreService } from './pyronlaboratory-core.service';
import { PyronlaboratoryCorePipe } from './pyronlaboratory-core.pipe';

@NgModule({
  declarations: [PyronlaboratoryCoreComponent, PyronlaboratoryCorePipe],
  imports: [],
  exports: [PyronlaboratoryCoreComponent, PyronlaboratoryCorePipe]
})
export class PyronlaboratoryCoreModule { }
