import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  private url: '';
  private std: any;

  constructor() {
    this.std = new Student();
  }


  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    image: new FormControl('', Validators.required),

  });

  get firstname() {
    return this.form.get('firstName')
  }
  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (ev: any) => { // called once readAsDataURL is completed
        this.url = ev.target.result;
        this.std.simage = reader.result;
      }
    }
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
    // this.form.controls.image = this.form.controls.image.replace("data:image/gif;base64,", "")
    // this.form.controls.image = this.form.controls.image.replace("data:image/jpeg;base64,", "")
    this.form.controls.image = this.std.image.replace("data:image/gif;base64,", "")
    this.form.controls.image = this.std.image.replace("data:image/jpeg;base64,", "")
    console.log(this.form.controls.image);
  }

}
