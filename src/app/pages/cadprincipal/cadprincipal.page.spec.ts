import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadprincipalPage } from './cadprincipal.page';

describe('CadprincipalPage', () => {
  let component: CadprincipalPage;
  let fixture: ComponentFixture<CadprincipalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadprincipalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadprincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
