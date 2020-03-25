import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSignupDialogComponent } from './dialog-signup-dialog.component';

describe('DialogSignupDialogComponent', () => {
  let component: DialogSignupDialogComponent;
  let fixture: ComponentFixture<DialogSignupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSignupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSignupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
