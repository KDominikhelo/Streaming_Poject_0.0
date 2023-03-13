import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  public isLoggedIn!: boolean;  





  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.getIsloggedIn();

    this.authService.loginChangeEvent.subscribe(res=>{
      this.isLoggedIn = res;
    })
  }

  logOut(){


    this.authService.logout();
    this.router.navigate(['/']);
    this.authService.loginChangeEvent.subscribe(res=>{
      this.isLoggedIn = res;
    })

  }

 

}
