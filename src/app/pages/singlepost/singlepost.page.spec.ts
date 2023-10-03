import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglepostPage } from './singlepost.page';

describe('SinglepostPage', () => {
  let component: SinglepostPage;
  let fixture: ComponentFixture<SinglepostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglepostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
