import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddperfilPage } from './addperfil.page';

describe('AddperfilPage', () => {
  let component: AddperfilPage;
  let fixture: ComponentFixture<AddperfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddperfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
