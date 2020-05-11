import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadopcaoPage } from './cadopcao.page';

describe('CadopcaoPage', () => {
  let component: CadopcaoPage;
  let fixture: ComponentFixture<CadopcaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadopcaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadopcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
