import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoginDialogComponent } from './dialog-login-dialog.component';

describe('DialogLoginDialogComponent', () => {
  let component: DialogLoginDialogComponent;
  let fixture: ComponentFixture<DialogLoginDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLoginDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
