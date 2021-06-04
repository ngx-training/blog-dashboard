import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { AuthUser } from '../services/user/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      identifier: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(formValue: AuthUser) {
    if (formValue) {
      this.authService.login(formValue);
    }
  }

}
