import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentEnroll } from '../Models/student';
import { StudentService } from '../Services/student.service';
import { ageRangeValidator } from './customValidator';
import { ConfirmPasswordValidator } from './customValidator';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  // [x: string]: any;
  private url = '';
  private std: StudentEnroll;
  registerForm: FormGroup;
  submitted = false;

  // registerForm = new FormGroup({
  //   stdId: new FormControl('', Validators.required),
  //   name: new FormControl('', Validators.required),
  //   img: new FormControl('')
  // })



  constructor(private studentService: StudentService, private fb: FormBuilder) {
    this.std = new StudentEnroll();
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);// read file as data url
      reader.onload = (ev: any) => {            // called once readAsDataURL is completed
        this.url = ev.target.result;
        this.std.image = reader.result;
        this.registerForm.value.profile = event.target.files[0];
      }
    }
  }

  // registerStudent() {
  //   console.log(this.registerForm);
  //   this.std.studentid = this.registerForm.controls["stdId"].value;
  //   this.std.name = this.registerForm.controls["name"].value;
  //   this.std.image = this.std.image.replace("data:image/gif;base64,", "");
  //   this.std.image = this.std.image.replace("data:image/jpeg;base64,", "");
  //   console.log(this.std.image);
  //   this.studentService.registerStudent(this.std).subscribe((data) => {
  //     console.log(data);
  //   })
  // }


  registerStudent() {
    // console.log(this.registerForm);
    this.submitted = true;
    this.studentService.registerStudent(this.registerForm).subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],      
      username: ['', Validators.required],
      age: ['', [Validators.required, ageRangeValidator]],
      profile: [''],
    }, { validator: ConfirmPasswordValidator.MatchPassword });
  }

}
