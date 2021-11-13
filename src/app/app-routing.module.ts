import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const routes: Routes = [
  { path: 'login-page', component: LoginComponentComponent },
  { path: '', component: LoginComponentComponent },
  { path: 'register-page', component: RegisterComponentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'detail/:id', component: DetailStudentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
