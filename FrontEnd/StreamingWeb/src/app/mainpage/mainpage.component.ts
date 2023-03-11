import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isLoggedIn = this.authService.isLoggedIn;


  constructor(private authService: AuthService) { 

    


  }

  ngOnInit(): void {
  }

}
