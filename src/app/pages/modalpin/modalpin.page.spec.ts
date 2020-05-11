import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalpinPage } from './modalpin.page';

describe('ModalpinPage', () => {
  let component: ModalpinPage;
  let fixture: ComponentFixture<ModalpinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalpinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalpinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
