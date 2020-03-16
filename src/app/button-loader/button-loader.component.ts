import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-loader',
  templateUrl: './button-loader.component.html',
  styleUrls: ['./button-loader.component.css']
})
export class ButtonLoaderComponent implements OnInit {
  submitting = false;
  loading = false;
  value = "initial value"
  submit() {
    this.submitting = true;
    setTimeout(()=>{
      this.submitting = false;
    }, 50000)
  }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.loading = true;
    this.value = "";
    setTimeout(()=>{
      this.value = "initial value";
      this.loading = false;
    }, 5000)
  }

}