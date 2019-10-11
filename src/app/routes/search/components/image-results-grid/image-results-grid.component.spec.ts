import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageResultsGridComponent } from './image-results-grid.component';

describe('ImageResultsGridComponent', () => {
  let component: ImageResultsGridComponent;
  let fixture: ComponentFixture<ImageResultsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageResultsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageResultsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
