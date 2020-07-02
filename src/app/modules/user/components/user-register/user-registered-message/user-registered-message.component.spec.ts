import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisteredMessageComponent } from './user-registered-message.component';

describe('UserRegisteredMessageComponent', () => {
  let component: UserRegisteredMessageComponent;
  let fixture: ComponentFixture<UserRegisteredMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegisteredMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisteredMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
