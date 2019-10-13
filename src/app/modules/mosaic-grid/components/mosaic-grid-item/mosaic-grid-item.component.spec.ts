import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicGridItemComponent } from './mosaic-grid-item.component';

describe('MosaicGridItemComponent', () => {
  let component: MosaicGridItemComponent;
  let fixture: ComponentFixture<MosaicGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaicGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosaicGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
