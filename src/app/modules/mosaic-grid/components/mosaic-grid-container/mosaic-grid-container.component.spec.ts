import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicGridContainerComponent } from './mosaic-grid-container.component';

describe('MosaicGridContainerComponent', () => {
  let component: MosaicGridContainerComponent;
  let fixture: ComponentFixture<MosaicGridContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicGridContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
