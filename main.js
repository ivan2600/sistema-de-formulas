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
});

const MA002 = new MateriaPrima({
  codigo: 'MA002',
  nombre: 'Harina 000',
});

const MA005 = new MateriaPrima({
  codigo: 'MA003',
  nombre: 'Sal Fina',
});

class DespachoMP {
  constructor({
    mp,
    despacho,
    lote,
    vencimiento,
  }) {
    this.mp = mp;
    this.despacho = despacho;
    this.lote = lote;
    this.vencimiento = vencimiento;
  }
}

const D0001 = new DespachoMP({
  mp: MA001,
  despacho: '0001',
  lote: '026/23',
  vencimiento: '12/03/24',
});

const D0002 = new DespachoMP({
  mp: MA002,
  despacho: '0002',
  lote: '027/23',
  vencimiento: '28/02/24',
});

const D0003 = new DespachoMP({
  mp: MA005,
  despacho: '0003',
  lote: 'M120323',
  vencimiento: '03/07/24',
});

class Deposito {
  constructor({
    nombre,
    despachos = [],
  }) {
    this.nombre = nombre;
    this.despachos = despachos;
  }
}

const DepositoMP = new Deposito({
  nombre: 'Depósito MP',
  despachos: [D0001, D0002, D0003],
});
