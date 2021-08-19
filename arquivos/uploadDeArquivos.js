const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbaclImagemCriada) => {
  const tiposValidos = ['jpg', 'png', 'jpeg'];
  const tipo = path.extname(caminho);
  const tipoEhValido = tiposValidos.indexOf(tipo.substring(1));

  if (tipoEhValido === -1) {
    console.log('Erro! Tipo inválido');
  } else {
    const novoCaminho = `./assets/images/${nomeDoArquivo}${tipo}`;

    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbaclImagemCriada(novoCaminho));
  }
};
