import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseUiLoginComponent } from './firebase-ui-login.component';

describe('FirebaseUiLoginComponent', () => {
  let component: FirebaseUiLoginComponent;
  let fixture: ComponentFixture<FirebaseUiLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseUiLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseUiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
