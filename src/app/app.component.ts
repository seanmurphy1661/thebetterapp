import { Component } from '@angular/core';

import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <products></products>
    <img src="{{imageURL}}" />
    <hr>
    <rating></rating>
    <hr>
    <button class="btn btn-primary"
      (click)="onClickMe($event)"
      [class.disabled] ="!isValid">Submit</button>

  
    `,
  providers: [ProductService]
})

export class AppComponent {
  title = 'The Better App';
  isValid=true; 
  imageURL = "https://www.w3schools.com/html/pic_mountain.jpg";

  onClickMe($event){
    console.log("Clicked",$event)
  }
}
