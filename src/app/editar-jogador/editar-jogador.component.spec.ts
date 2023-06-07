import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJogadorComponent } from './editar-jogador.component';

describe('EditarJogadorComponent', () => {
  let component: EditarJogadorComponent;
  let fixture: ComponentFixture<EditarJogadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarJogadorComponent]
    });
    fixture = TestBed.createComponent(EditarJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
