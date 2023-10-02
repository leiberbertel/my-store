import { Component } from '@angular/core';

import { Product } from './product.model';

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
    age: 21,
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

  names: string[] = ["Leiber", "Abraham", "Karol", "Emma"];

  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName = ''; // Para borrar el elemento que se ingreso antes
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  // *ngFor con arrays:
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

}
