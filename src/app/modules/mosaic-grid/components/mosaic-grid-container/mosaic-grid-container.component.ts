import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-mosaic-grid-container',
  templateUrl: './mosaic-grid-container.component.html',
  styleUrls: ['./mosaic-grid-container.component.scss']
})
export class MosaicGridContainerComponent implements OnInit {
  @Input() rowGap: number;
  @Input() columnGap: number;
  @Input() rowSize: number;
  @Input() colSize: number;

  @ViewChild('gridContainer', { static: true }) gridContainer: ElementRef<
    HTMLDivElement
  >;

  constructor(private renderer: Renderer2) {
    this.rowSize = 2;
    this.colSize = 20;
  }

  ngOnInit() {
    const el = this.gridContainer.nativeElement;

    if (this.rowGap) {
      this.renderer.setStyle(el, 'grid-row-gap', `${this.rowGap}rem`);
    }

    if (this.columnGap) {
      this.renderer.setStyle(el, 'grid-column-gap', `${this.columnGap}rem`);
    }

    this.renderer.setStyle(el, 'grid-auto-rows', `${this.rowSize}rem`);
    this.renderer.setStyle(
      el,
      'grid-template-columns',
      `repeat(auto-fill, minmax(${this.colSize}rem, 1fr))`
    );
  }
}
