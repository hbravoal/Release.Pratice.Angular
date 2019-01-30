import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNetcommerceComponent } from './home-netcommerce.component';

describe('HomeNetcommerceComponent', () => {
  let component: HomeNetcommerceComponent;
  let fixture: ComponentFixture<HomeNetcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNetcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNetcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
