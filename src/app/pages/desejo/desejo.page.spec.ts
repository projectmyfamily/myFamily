import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesejoPage } from './desejo.page';

describe('DesejoPage', () => {
  let component: DesejoPage;
  let fixture: ComponentFixture<DesejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
