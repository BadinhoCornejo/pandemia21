import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMdItemComponent } from './article-md-item.component';

describe('ArticleMdItemComponent', () => {
  let component: ArticleMdItemComponent;
  let fixture: ComponentFixture<ArticleMdItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleMdItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMdItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
