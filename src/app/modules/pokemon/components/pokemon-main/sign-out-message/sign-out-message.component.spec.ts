import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOutMessageComponent } from './sign-out-message.component';

describe('SignOutMessageComponent', () => {
  let component: SignOutMessageComponent;
  let fixture: ComponentFixture<SignOutMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignOutMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignOutMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
