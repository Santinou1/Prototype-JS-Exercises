function Mamifero(nombre) {
  this.nombre = nombre;
  this.descendencia = [];
}

Mamifero.prototype.saludar = function () {
  return `Hola, mi nombre es ${this.nombre}`;
};

Mamifero.prototype.nuevoHijo = function () {
  let nuevoHijo = new Mamifero(this.nombre + " Jr");
  this.descendencia.push(nuevoHijo);
  return nuevoHijo;
};

function Gato(nombre, color, descendencia) {
  Mamifero.call(this, nombre, descendencia);
  this.color = color;
}

Gato.prototype = Object.create(Mamifero.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.nuevoHijo = function (color) {
  let batman = new Gato(`${this.nombre} Jr`, color);
  this.descendencia.push(batman);
  return batman;
};
