import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { RegisterService } from 'src/app/services/auth/register.service';
import { User } from 'src/app/services/auth/user';
import { User2 } from 'src/app/services/auth/user2';
import { AlertService } from 'src/app/services/Alert/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoginOn:boolean=false;
  registerForm!: FormGroup;

  

  constructor(private loginService:LoginService, private registerService: RegisterService, private formBuilder:FormBuilder, private alertService: AlertService) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });

    this.registerForm = this.formBuilder.group({
      username:['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required]
    })
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }


  register(): void {
    const user2: User2 = this.registerForm.value;
    this.registerService.register(user2).subscribe({
      next: () => {
        this.alertService.showSuccess('Registro exitoso');
        // Registro exitoso, puedes realizar alguna acción adicional si es necesario
      },
      error: (error) => {
        console.error('Error durante el registro:', error);
        this.alertService.showError('Error durante el registro');
        // Manejar el error de registro, mostrar un mensaje al usuario, etc.
      },
    });
  }
}


