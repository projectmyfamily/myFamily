import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaltarefaPage } from './modaltarefa.page';

describe('ModaltarefaPage', () => {
  let component: ModaltarefaPage;
  let fixture: ComponentFixture<ModaltarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltarefaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaltarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
