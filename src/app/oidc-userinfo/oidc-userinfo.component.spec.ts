import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcUserinfoComponent } from './oidc-userinfo.component';

describe('OidcIntrospectionComponent', () => {
  let component: OidcUserinfoComponent;
  let fixture: ComponentFixture<OidcUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcUserinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
