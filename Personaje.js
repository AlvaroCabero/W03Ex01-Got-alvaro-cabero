

class Personaje {
  serie = "GoT";
  nombre;
  static familia ={
    Greyjoy: "casa greyjoy",
    Targaryen: "casa Tagaryen",
  };
  edad;
  estado = true;
  fraseTipo;

  constructor(nombre, familia, edad){
    this.nombre: nombre;
    this.familia: familia;
    this.edad: edad;

  }
  comunica(){
   return this.fraseTipo;
  }
  morir(){
  this.alive: 0;
  }
}
