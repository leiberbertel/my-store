import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'leiber';
  age: number = 21;
  img = 'https://source.unsplash.com/random';
  // property-binding
  btnDisable: boolean = false;
  nameValue: string = "Insertar info";

  person = {
    name: "Leiber",
    age: 21,
    img: 'https://source.unsplash.com/random'
  }
}
