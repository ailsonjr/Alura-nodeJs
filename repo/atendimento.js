const query = require('../infraestrutura/database/queries');

class Atendimento {
  adiciona(atendimento) {
    const sql = 'INSERT INTO Atendimentos SET ?';
    return query(sql, atendimento);
  }

  lista() {
    const sql = 'SELECT * FROM Atendimentos';

    return query(sql);
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

    return query(sql, id);
  }

  altera(id, valores) {
    if (valores.data) {
      valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    }
    const sql = `UPDATE Atendimentos SET ? WHERE id=${id}`

    return query(sql, valores, id);
  }

  delete(id) {
    const sql = 'DELETE FROM Atendimentos WHERE id=?';

    return query(sql, id);
  }
}

module.exports = new Atendimento;
