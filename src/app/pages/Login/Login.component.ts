import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../../utils/func/index';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private builder: FormBuilder, private router: Router) {}

  user = this.builder.group({
    email: '',
    password: '',
  });
  ngOnInit() {}

  handleSubmit() {
    login({
      email: this.user.value.email ?? '',
      password: this.user.value.password ?? '',
    });

    this.router.navigateByUrl('home');
  }
}
