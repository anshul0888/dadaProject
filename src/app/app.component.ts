import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blogForm: FormGroup;
  showData = false;
  data;
  ngOnInit() {
    this.blogForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'img_url': new FormControl(null, [Validators.required]),
      'para1': new FormControl(null, [Validators.required]),
      'para2': new FormControl(null, [Validators.required]),
      'para3': new FormControl(null, [Validators.required]),
      'author': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.showData = true;
    this.data = this.blogForm.value;
    console.log(this.data);
  }
}
