import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatedComponent } from './user-updated.component';

describe('UserUpdatedComponent', () => {
  let component: UserUpdatedComponent;
  let fixture: ComponentFixture<UserUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
