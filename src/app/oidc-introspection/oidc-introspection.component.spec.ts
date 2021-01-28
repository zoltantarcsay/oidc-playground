import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcIntrospectionComponent } from './oidc-introspection.component';

describe('OidcIntrospectionComponent', () => {
  let component: OidcIntrospectionComponent;
  let fixture: ComponentFixture<OidcIntrospectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcIntrospectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OidcIntrospectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
