import { Luchador, Asesor, } from export default Luchador;
class Personaje {
  serie:GoT;
  nombre;
  familia;
  edad;
  estado;
  constructor(name, family, age, alive){
    this.nombre: name;
    this.familia: family;
    this.edad: age;
    this.alive: alive;
  }
  comunica(){
   
  }
  morir(){
  this.alive: 0;
  }
}
