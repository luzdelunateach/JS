import { Component, OnInit } from '@angular/core';
import { RegisterService } from './Service/register.service';
import {Register} from './Interface/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registers:Register[]=[];
  register:Register={name:"",email:"",password:"",vpassword:""}
  constructor(private registerService:RegisterService, private router:Router) { }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.register.password==this.register.vpassword){
      let vregistrar=this.register;
      this.registerService.setRegister(vregistrar).subscribe(
        vregistrar=>{
          console.log(vregistrar);
        }
      );
      this.registers.push(vregistrar);
      this.router.navigate(['/dashboard']);
    }else{
      var msj=document.getElementById("passwordValidation");
      msj.classList.remove("invalid-feedback");
      msj.classList.add("needs-validation")
    }

  }

}
