import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})

export class RegistrationpageComponent implements OnInit {
 
 
  registrationForm: FormGroup | any;


  constructor(private formBuilder: FormBuilder, private userDataService: UserDataService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    const user = this.registrationForm.value;
    this.userDataService.addUser(user);
    this.registrationForm.reset();
  }
}
