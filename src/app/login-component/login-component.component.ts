import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from '../class/login-form';
import { HeaderComponent } from '../header/header.component';
import { HttpServerService } from '../services/http-server.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public message:string ='';


  constructor(private httpServerService: HttpServerService, private router: Router) {
    
  }


  ngOnInit(): void {

  }
  @Input() loginForm = new LoginForm();

  // public loginForm = new LoginForm();

  //sử dụng dịch vụ ở cửa hàng
  submitLogin(){
    //decorate lại payLoad data
    //this.decorLoginForm(this.email, this.password);
    //load payLoad này vào request
    this.httpServerService.doLogin(this.loginForm).subscribe(response=>{
      //kiểm tra status code response, nếu 200 redirect sang trang list student
      if(response.t !== null){
        this.router.navigate(['/list-student'])
      }else{
        this.message = 'Email or password is incorrect!';
        this.loginForm.password = '';
      }
    })
  }

  //sayHello(response)

}
