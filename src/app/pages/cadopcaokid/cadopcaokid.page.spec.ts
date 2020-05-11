import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadopcaokidPage } from './cadopcaokid.page';

describe('CadopcaokidPage', () => {
  let component: CadopcaokidPage;
  let fixture: ComponentFixture<CadopcaokidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadopcaokidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadopcaokidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
