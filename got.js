import Personaje from "./Personaje.js";
import Luchador from "./Luchador.js";
import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Rey from "./Rey.js";

cconst Joffrey = new Rey("Joffrey", "Family", 17, 2);
const Jaime = new Luchador("Jaime", "Family", 30, "AK-47", 7);
const Daenerys = new Luchador("Daenerys", "Family", 20, "AK-47", 7);
const Tyrion = new Asesor("Tyirion", "Family", 28, Daenerys);
const Bronn = new Escudero("Tyirion", "Family", 28, Jaime, 7);

const personajes = [Joffrey, Jaime, Daenerys, Tyrion, Bronn];

const comunicados = personajes
.filter ((personaje) => personaje instanceof Luchador)
.map((personaje) => personaje.comunicar());

console.log(Joffrey.serie);
comunicados.forEach((mensaje) => console.log(mensaje));
console.log(`Jaime vivo ? ${Jaime.vivo}`);
console.log(`Tyirion vivo ? ${Tyrion.vivo}`);
Jaime.morir();
Tyrion.morir();
console.log(`Jaime vivo ? ${Jaime.vivo}`);
console.log(`Tyirion vivo ? ${Tyrion.vivo}`);