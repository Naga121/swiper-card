import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentUser:string;
  images=[
    {id:1,name:"Naga",role:"UI Develop",img:'assets/img1.jpg'},
    {id:2,name:"Raju",role:"JAVA Develop",img:'assets/img2.jpg'},
    {id:3,name:"Thota",role:".NET Develop",img:'assets/img3.jpg'},
    {id:4,name:"Malli",role:"AS Develop",img:'assets/img4.JPG'}
  ];
  constructor() {
    this.currentUser=localStorage.getItem('currentUser')?'hello':'';
   }

  ngOnInit(): void {
  }
}
