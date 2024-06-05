import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  data = {
    email: 'admin@gmail.com',
    pass: '123',
  };

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { email, password } = this.form.controls;

    let access = false;

    if (email.value === this.data.email && password.value === this.data.pass) {
      access = true;
    }

    this.router.navigate(['dashboard'], { queryParams: { access } });
  }
}
