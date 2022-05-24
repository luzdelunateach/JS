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
    let valid:boolean = true;
    console.log(this.register);
    if(this.register.name==""){
      let val=document.getElementById("nameV");
      val.classList.remove("invalid-feedback");
      val.classList.add("needs-validation", "text-danger");
      valid = false;
    }else{
      let val=document.getElementById("nameV");
      val.classList.remove("needs-validation", "text-danger");
      val.classList.add("invalid-feedback");
    }

    if(this.register.email==""){
      let val=document.getElementById("emailV");
      val.classList.remove("invalid-feedback");
      val.classList.add("needs-validation","text-danger");
      valid = false;
    }else{
      let val=document.getElementById("emailV");
      val.classList.remove("needs-validation","text-danger");
      val.classList.add("invalid-feedback");
    }

    if(this.register.password==""){
      let val=document.getElementById("passwordV");
      val.classList.remove("invalid-feedback");
      val.classList.add("needs-validation","text-danger");
      valid = false;
    }else{
      let val=document.getElementById("passwordV");
      val.classList.remove("needs-validation","text-danger");
      val.classList.add("invalid-feedback");
    }

    if(this.register.password==this.register.vpassword){

      if(valid){
        let vregistrar=this.register;
        this.registerService.setRegister(vregistrar).subscribe(
          vregistrar=>{
            console.log(vregistrar);
          }
        );
        this.registers.push(vregistrar);
        this.router.navigate(['/dashboard']);
      }

    }else{
      var msj=document.getElementById("passwordTwoV");
      msj.classList.remove("invalid-feedback");
      msj.classList.add("needs-validation")
    }

  }

}
