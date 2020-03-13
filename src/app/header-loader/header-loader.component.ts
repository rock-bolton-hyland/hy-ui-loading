import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-loader',
  templateUrl: './header-loader.component.html',
  styleUrls: ['./header-loader.component.css']
})
export class HeaderLoaderComponent implements OnInit {

  submitting = false;
  loading = false;
  submit() {
    this.submitting = true;
    setTimeout(()=>{
      this.submitting = false;
    }, 5000)
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