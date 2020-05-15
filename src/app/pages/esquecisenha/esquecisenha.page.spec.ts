import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquecisenhaPage } from './esquecisenha.page';

describe('EsquecisenhaPage', () => {
  let component: EsquecisenhaPage;
  let fixture: ComponentFixture<EsquecisenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquecisenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquecisenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
