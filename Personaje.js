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
  comunicar(){
    return
  }
  morir(){
  this.alive: 0;
  }
}
