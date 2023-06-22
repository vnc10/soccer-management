import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClubeComponent } from './editar-clube.component';

describe('EditarClubeComponent', () => {
  let component: EditarClubeComponent;
  let fixture: ComponentFixture<EditarClubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarClubeComponent]
    });
    fixture = TestBed.createComponent(EditarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
