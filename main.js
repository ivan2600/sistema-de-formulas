class MateriaPrima {
  constructor({
    codigo,
    nombre,
  }) {
    this.codigo = codigo;
    this.nombre = nombre;
  }
}

const MA001 = new MateriaPrima({
  codigo: 'MA001',
  nombre: 'Harina Crystal G',
})