import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';

  get formVal() {
    return this.loginForm.controls;
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.userService
      .login(this.formVal.email.value, this.formVal.password.value)
      .subscribe(
        (        data): void=> {
          this.router.navigate(['/']);
        },
        error=> {
          this.loading = false;
        }
      );
  }
}
