import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadkidPage } from './cadkid.page';

describe('CadkidPage', () => {
  let component: CadkidPage;
  let fixture: ComponentFixture<CadkidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadkidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadkidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
