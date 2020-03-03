import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';

import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactive2Component } from './reactive2/reactive2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Guard/auth.guard';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  { path: 'register', component: ReactiveformComponent },
  { path: 'reactive2', component: Reactive2Component, canActivate: [AuthGuard] },
  {
    path: 'parent', component: ParentComponent,
    children: [
      { path: 'child', component: ChildComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'studentRegister', component: StudentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    ReactiveformComponent,
    Reactive2Component,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    StudentComponent
  ]
})
export class AppRoutingModule { }
