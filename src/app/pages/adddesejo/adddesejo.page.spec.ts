import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdddesejoPage } from './adddesejo.page';

describe('AdddesejoPage', () => {
  let component: AdddesejoPage;
  let fixture: ComponentFixture<AdddesejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddesejoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdddesejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
