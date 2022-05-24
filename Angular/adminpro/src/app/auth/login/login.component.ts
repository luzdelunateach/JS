import { Component, OnInit } from '@angular/core';
import { LoginService } from './Service/login.service';
import { Login } from './interface/login';
import { Register } from '../register/Interface/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users:Register[]=[];
  login:Login={email:"",password:""}

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.loginService.getUsers().subscribe(data=>this.users=data);
  }

  onSubmit(){

    let resp=this.users.find(x=>x.email==this.login.email && x.password==this.login.password);
    console.log(resp);
    if(resp!=null){
      this.router.navigate(['/dashboard']);
    }else{
      //this.router.navigate(['/register']);
      alert("Account does not exist");
    }
  }

}
