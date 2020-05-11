import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtarefaPage } from './addtarefa.page';

describe('AddtarefaPage', () => {
  let component: AddtarefaPage;
  let fixture: ComponentFixture<AddtarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtarefaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
