class Escudero extends Personaje{
  boss;
  pelotismo;
  constructor(pelotism,boss ){
  super(name, family, age, alive){
    this.pelotismo = pelotism;
   
   if (boss instanceof (Luchador)) 
   {this.boss = boss;}
    
} 
  }
comunica(){
  console.log ("Soy un loser");
}

export default Escudero;