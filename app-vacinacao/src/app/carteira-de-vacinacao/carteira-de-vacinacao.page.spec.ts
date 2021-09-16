import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarteiraDeVacinacaoPage } from './carteira-de-vacinacao.page';

describe('CarteiraDeVacinacaoPage', () => {
  let component: CarteiraDeVacinacaoPage;
  let fixture: ComponentFixture<CarteiraDeVacinacaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteiraDeVacinacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarteiraDeVacinacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
