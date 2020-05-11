import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtividadePage } from './atividade.page';

describe('AtividadePage', () => {
  let component: AtividadePage;
  let fixture: ComponentFixture<AtividadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtividadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
