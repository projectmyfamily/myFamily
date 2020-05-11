import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModaldesejoPage } from './modaldesejo.page';

describe('ModaldesejoPage', () => {
  let component: ModaldesejoPage;
  let fixture: ComponentFixture<ModaldesejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaldesejoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModaldesejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
