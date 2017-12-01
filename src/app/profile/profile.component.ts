import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private dataservice: DataService,private router:Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
onclickprofile(){
this.router.navigateByUrl('signup');
}

}
