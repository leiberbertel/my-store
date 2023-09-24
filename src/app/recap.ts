//Variables en TS: pueden tener dos o más tipos, usamos el operador pib para eso
const username: string | number = "Leiber";

//funcion flecha
const sum = (a: number, b: number): number => {
  return a + b;
}

//funcion flecha, llamado
sum(1, 2);

//Inicialización de clase
class Person {
      // Forma larga:
  // private age: number;
  // lastName: string;

  // constructor(age: number, lastName: string){
  //   this.age = age;
  //   this.lastName = lastName;
  // }

  //constructor //si pongo el alcance como parametro, la variable se crea y se autoasigna con el parametro
  constructor(private age: number,public lastName: string) {}

  getAge() {
    return this.age;
  }

  setAge(age:number) {
    this.age = age;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }
}

//Instanciación
const leiber = new Person(12,"Bertel");
leiber.setAge(22);


/* A las funciones tambien se les puede asignar el valor que devolverán desde
ellas mismas, poniendo el tipo de devolucion luego de los parámetros */
const sum2 = ( a : number , b: number): number => a + b;
const saludar = (nombre: string , edad: number ): string => `Hola me llamo ${nombre} y tengo ${edad} años`;
