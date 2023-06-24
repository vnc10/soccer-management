import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClubesComponent } from './listar-clubes.component';

describe('ListarClubesComponent', () => {
  let component: ListarClubesComponent;
  let fixture: ComponentFixture<ListarClubesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClubesComponent]
    });
    fixture = TestBed.createComponent(ListarClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
