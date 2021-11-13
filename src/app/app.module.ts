import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';


const routes: Routes = [
  { path: 'login-page', component: LoginComponentComponent },
  { path: 'register-page', component: RegisterComponentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: '', component: LoginComponentComponent },
  { path: 'detail/:id', component: DetailStudentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListStudentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    DetailStudentComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  //this is contain all components of my application
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
