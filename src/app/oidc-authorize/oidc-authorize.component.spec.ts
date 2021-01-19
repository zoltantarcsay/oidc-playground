import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcAuthorizeComponent } from './oidc-authorize.component';

describe('OidcAuthorizeComponent', () => {
  let component: OidcAuthorizeComponent;
  let fixture: ComponentFixture<OidcAuthorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcAuthorizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
