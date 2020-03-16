import { Component, OnInit, OnChanges, Input,  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'hy-form-overlay',
  templateUrl: './form-overlay.component.html',
  styleUrls: ['./form-overlay.component.css']
})
export class FormOverlayComponent implements OnInit {
  @Input() submitting = false;
  @ViewChild("name") nameField: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  foc() {
    console.log(this.submitting);
    if(this.submitting) {
      console.log(this.nameField);
      this.nameField.nativeElement.focus();
    }
  }
}