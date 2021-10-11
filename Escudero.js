class Escudero extends Personaje{
  boss;
  pelotismo;
  constructor(pelotism,boss ){
  super(name, family, age, alive){
    this.pelotismo = pelotism;
    this.boss = boss;
    
} 
  }
comunica_escudero(){
  console.log ("Soy un loser");
}