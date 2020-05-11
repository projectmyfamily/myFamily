import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalperfilPage } from './modalperfil.page';

describe('ModalperfilPage', () => {
  let component: ModalperfilPage;
  let fixture: ComponentFixture<ModalperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
