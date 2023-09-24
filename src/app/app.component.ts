import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'leiber';
  age: number = 21;
  img: string = 'https://source.unsplash.com/random';

  // property-binding
  btnState: boolean = true;
  nameValue: string = "Insertar info";

  person = {
    name: "Leiber",
    age: 99,
    img: 'https://source.unsplash.com/random'
  }

  // métodos
  toggleButton() {
    this.btnState = !this.btnState;
  };

  increaseAge() {
    if(this.person.age < 100)
      this.person.age += 1;
  };

  decreaseAge() {
    if(this.person.age > 0)
      this.person.age -= 1;
  };

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTo);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

}
