import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadperfilPage } from './cadperfil.page';

describe('CadperfilPage', () => {
  let component: CadperfilPage;
  let fixture: ComponentFixture<CadperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
