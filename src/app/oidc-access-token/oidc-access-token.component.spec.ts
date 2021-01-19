import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcAccessTokenComponent } from './oidc-access-token.component';

describe('OidcAccessTokenComponent', () => {
  let component: OidcAccessTokenComponent;
  let fixture: ComponentFixture<OidcAccessTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcAccessTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcAccessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
