import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNetCommerceComponent } from './side-bar-net-commerce.component';

describe('SideBarNetCommerceComponent', () => {
  let component: SideBarNetCommerceComponent;
  let fixture: ComponentFixture<SideBarNetCommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarNetCommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarNetCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
