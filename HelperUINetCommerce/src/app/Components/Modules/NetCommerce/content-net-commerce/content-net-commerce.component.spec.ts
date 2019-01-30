import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNetCommerceComponent } from './content-net-commerce.component';

describe('ContentNetCommerceComponent', () => {
  let component: ContentNetCommerceComponent;
  let fixture: ComponentFixture<ContentNetCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNetCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNetCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
