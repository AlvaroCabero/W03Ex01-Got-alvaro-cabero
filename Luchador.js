class Luchador extends Personaje{
  arma;
  destreza;
  constructor(weapon, skill ){
  super(name, family, age, alive){
    this.arma= weapon;
    this.destreza = skill;
} 
  }
comunica(){
  console.log ("Primero pego y luego pregunto");
}

export default Luchador;