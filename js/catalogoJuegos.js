class Genero {
  constructor(nombreGenero) {
    this.nombreGenero = nombreGenero;
  }
}
const listaGeneros = [];

//------------------------------------------------------------------------------------

class Plataforma {
  constructor(nombrePlataforma) {
    this.nombrePlataforma = nombrePlataforma;
  }
}
const listaPlataformas = [];

//------------------------------------------------------------------------------------

class Idioma {
  constructor(idioma) {
    this.idioma = idioma;
  }
}
const listaIdiomas = [];

//------------------------------------------------------------------------------------

class Juego {
  constructor(id, nombreJuego = "...", plataforma = "...", idioma = "...", genero = "...", tamano = "...", precio = "...", imagen="...", descripcion = "...",){
    this.id = id;
    this.nombreJuego = nombreJuego;
    this.plataforma = plataforma;
    this.idioma = idioma;
    this.genero = genero;
    this.tamano = `${tamano} GB`;
    this.precio = precio.toFixed(2);
    this.imagen= imagen;
    this.descripcion = descripcion;
    this.cantidad= 1;
    
  }

  ImportarElementoDelistaObjeto(array, indice){
    let opcionNaN = Number.isNaN(indice);
    if (opcionNaN === true) {
      return "...";
    } 
    else {
      const objetoImportado = array[indice];
      for (let propiedad in objetoImportado) {
        const valorPropiedad = objetoImportado[propiedad];
        return valorPropiedad;
      }
    }
  }
}
const listaJuegos = [];

//------------------------------------------------------------------------------------

//...............................PLATAFORMAS

const pc = new Plataforma("PC");
const playStation = new Plataforma("PLAYSTATION");

//LISTA PLATAFORMAS

listaPlataformas.push(pc, playStation);

//--------------------------------IDIOMAS

const multilenguaje = new Idioma("Multilenguaje");
const español = new Idioma("Español");
const Ingles = new Idioma("Ingles");

//LISTA IDIOMAS

listaIdiomas.push(multilenguaje, español, Ingles);

//-------------------------------GENEROS

const accion = new Genero("Acción");
const aventura = new Genero("Aventura");
const deportes = new Genero("Deportes");
const rpg = new Genero("RPG");
const terror = new Genero("Terror");
const estrategia = new Genero("Estrategia");

//LISTA GENEROS

listaGeneros.push(accion, aventura, deportes, rpg, terror, estrategia);

//-------------------------------JUEGOS

const assassinsCreed= new Juego(01, "Assassins-Creed","PC","Español", "Acción", 21, 200,"img/juegos/asassinscreedVal.png");
const ageOfEmpires2= new Juego(02, "Age of Empires II", "PC", "Español", "Estrategia", 3, 299,"img/juegos/Ageofempires2hd.png");
const halfLife2= new Juego(03, "Half-Life 2", "PC", "Multilenguaje", "Aventura", 15, 790.9,"img/juegos/halflife.png");
const CsGO = new Juego(04, "Counter-Strike GO", "Español", "Acción", 5, 3, 299,"img/juegos/csgo.png");
const CoDWWII = new Juego(05, "Call of Duty WWII", "PC", "Ingles", "Acción", 15, 790.9,"img/juegos/callofdutyww2.png");
const GrimFandango = new Juego(06, "Grim Fandango", "PC", "Español", "Aventura", 3, 299,"img/juegos/grinfandango.png");
const RE2 = new Juego(07, "Resident Evil 2", "PC", "Ingles", "Terror", 15, 790.9,"img/juegos/resitenevil2.png");
const SCPSecret= new Juego(08, "SCP Secret", "PC", "Multilenguaje", "Terror", 3, 299,"img/juegos/SCP.png");
const ShadowofWar = new Juego(09, "Middle-earth: Shadow of War", "PC", "Español", "Aventura", 15, 790.9,"img/juegos/shadowofwar.png");
const Hitman = new Juego(10, "HITMAN", "PC", "Español", "Estrategia", 3, 299,"img/juegos/hitmancajaacero.png");

const stray = new Juego(11, "Stray", "PlayStation", "Multilenguaje", "Aventura", 8, 1199.99,"img/juegos/straytapa.png");
const fifastreet = new Juego(12, "FIFA STREET", "PlayStation", "Ingles", "Deportes", 32.4, 10999.99,"img/juegos/fifiastreet.png");
const Bt2042 = new Juego(13, "BATTLEFIELD 2042", "PlayStation", "Ingles", "Acción", 8, 1199.99,"img/juegos/battlefield.png");
const cyberPunk = new Juego(14, "Cyber Punk 2077", "PlayStation", "Español", "Acción", 32.4, 10999.99,"img/juegos/cyberpunk.png");
const darkSoulIII = new Juego(15, "Dark Souls III", "PlayStation", "Multilenguaje", "Terror", 8, 1199.99,"img/juegos/darksouls3.png");
const godOW = new Juego(16, "God of War", "PlayStation", "Español", "Aventura", 32.4, 10999.99,"img/juegos/godofwar.png");
const gta5 = new Juego(17, "Grand Theft Auto V", "PlayStation", "Español", "Acción", 8, 1199.99,"img/juegos/gta5.png");
const redredemption = new Juego(18, "Red Dead Redemption II", "PlayStation", "Multilenguaje", "Aventura", 32.4, 10999.99,"img/juegos/reddeadredeption2.png");
const lastUf = new Juego(19, "The Last of Us", "PlayStation", "Multilenguaje", "Terror", 32.4, 10999.99,"img/juegos/thelastofus.png");
const dragonBall = new Juego(20, "Dragon Ball Z - kakarot", "PlayStation", "Español", "Acción", 32.4, 10999.99,"img/juegos/dragonballkakarot.png");

//LISTA DE JUEGOS

listaJuegos.push(assassinsCreed, ageOfEmpires2, stray, fifastreet, CoDWWII,lastUf, gta5, Hitman, godOW, CsGO);
listaJuegos.push(halfLife2, RE2, darkSoulIII, redredemption, cyberPunk, Bt2042, ShadowofWar, SCPSecret, GrimFandango, dragonBall);


function maximoId(){ //Devuelve el Numero ID Maximo de la lista juegos;

const listaDeIds=[];
if(listaJuegos.length===0){
  return 0;
}
else{
listaJuegos.forEach(element => {
  const id= element.id;
  listaDeIds.push(id);});
const maximoId = Math.max(...listaDeIds);//con los (...) puedo sacar el maximo de un array de numeros.
return maximoId; 
}
}

