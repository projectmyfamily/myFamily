import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaltermosPage } from './modaltermos.page';

describe('ModaltermosPage', () => {
  let component: ModaltermosPage;
  let fixture: ComponentFixture<ModaltermosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltermosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaltermosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
