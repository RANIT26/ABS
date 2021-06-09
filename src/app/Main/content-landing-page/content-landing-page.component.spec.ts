import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLandingPageComponent } from './content-landing-page.component';

describe('ContentLandingPageComponent', () => {
  let component: ContentLandingPageComponent;
  let fixture: ComponentFixture<ContentLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
