import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';
import { AuthService } from '../auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup | any;


  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService,private router: Router ,private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const user = this.userDataService.userData.find(user => user.username === username && user.password === password);

    if (user) {
      console.log("sikeres")
      alert("Sikeres bejelentkezés!");
      this.authService.login(username, password);
     


    } else {
      alert("Sikertelen bejelentkezés! Hibás felhasználónév vagy jelszó!");
      console.log("sikerleten!");
      
    }

    if (this.authService.getIsloggedIn()) {
      this.router.navigate(['/mainpage']);
      alert(this.authService.getIsloggedIn());
    }
  }

}
