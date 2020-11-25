import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyronlaboratoryCoreComponent } from './pyronlaboratory-core.component';

describe('PyronlaboratoryCoreComponent', () => {
  let component: PyronlaboratoryCoreComponent;
  let fixture: ComponentFixture<PyronlaboratoryCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyronlaboratoryCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyronlaboratoryCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
