class Luchador extends Personaje{
  arma;
  destreza;
  constructor(weapon, skill ){
  super(name, family, age, alive){
    this.arma= weapon;
    this.destreza = skill;
} 
  }
comunica_luchador(){
  console.log ("Primero pego y luego pregunto");
}