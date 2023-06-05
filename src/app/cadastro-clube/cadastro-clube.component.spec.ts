import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClubeComponent } from './cadastro-clube.component';

describe('CadastroClubeComponent', () => {
  let component: CadastroClubeComponent;
  let fixture: ComponentFixture<CadastroClubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroClubeComponent]
    });
    fixture = TestBed.createComponent(CadastroClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
