import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputIdValue:number;



constructor(private router: Router) {}

  searchUser(){
  
    this.router.navigate(['/user'+'/'+this.inputIdValue]);
    
  }
}
