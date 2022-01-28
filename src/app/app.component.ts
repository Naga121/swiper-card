import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Model/user';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser:any=User;
  constructor(private router:Router,private user:UserService ){
    this.user.currentUser.subscribe(x=>this.currentUser=x);
  }
  logout(){
    this.user.logout();
    this.router.navigate(['/login']);
  }
}
