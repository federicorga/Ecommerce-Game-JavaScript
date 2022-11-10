
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
  constructor(
    id,
    nombreJuego = "...",
    plataforma = "...",
    idioma = "...",
    genero = "...",
    tamano = "...",
    precio = "...",
    imagen = "...",
    descripcion = "..."
  ) {
    this.id = id;
    this.nombreJuego = nombreJuego;
    this.plataforma = plataforma;
    this.idioma = idioma;
    this.genero = genero;
    this.tamano = `${tamano} GB`;
    this.precio = precio.toFixed(2);
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.cantidad = 1;
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

//LISTA DE JUEGOS

const catalogoJson = `json/catalogoJuegos.json`;

