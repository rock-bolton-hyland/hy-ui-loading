import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'hy-form-loading-overlay',
  templateUrl: './form-loading-overlay.component.html',
  styleUrls: ['./form-loading-overlay.component.css'],
  host:     {'[class.visible]':'visible'}
})
export class FormLoadingOverlayComponent implements AfterViewInit, OnChanges {
  @Input() visible = false;

  constructor(private _renderer: Renderer2, private _host: ElementRef) { }

  ngAfterViewInit() {
    const parent = this._renderer.parentNode(this._host.nativeElement);
    this._renderer.setStyle(parent, 'position', 'relative');
    console.log('parent = ' + parent);
    //this._host.nativeElement.wdith = '100px';
    // this._renderer.setStyle(this._host.nativeElement, 'width', parent.nativeElement.width );
    
  }

  ngOnChanges(){
    // Set host element width and height to prent element width and height;
    const parent = this._renderer.parentNode(this._host);
    console.log('parent = ' + parent);
  }
}