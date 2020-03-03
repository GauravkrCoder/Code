import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthGuard } from '../Guard/auth.guard';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css'],
  providers: [AuthGuard]
})
export class Reactive2Component implements OnInit {
  private url: '';
  private frmGrp1: FormGroup;
  private fb: FormBuilder;
  private std: Student;

  constructor() {
    this.fb = new FormBuilder();
    this.std = new Student();

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (ev: any) => { // called once readAsDataURL is completed
        this.url = ev.target.result;
        this.std.image = reader.result;
      }
    }
  }

  btnSubmit() {
    this.std.sno = this.frmGrp1.controls["sno"].value;
    this.std.name = this.frmGrp1.controls["sname"].value;
    this.std.image = this.std.image.replace("data:image/gif;base64,", "");
    this.std.image = this.std.image.replace("data:image/jpeg;base64,", "");
    console.log(this.frmGrp1.value);
    //console.log(this.frmGrp1);
    // this.stdServ.SaveStudent(this.std).subscribe(data=>console.log(data));
  }


  ngOnInit() {
    this.frmGrp1 = this.fb.group({
      sno: [''],
      sname: [''],
    })
  }

}
