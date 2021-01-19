import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcConfigComponent } from './oidc-config.component';

describe('OidcConfigComponent', () => {
  let component: OidcConfigComponent;
  let fixture: ComponentFixture<OidcConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
