const fs = require('fs');

module.exports = (caminho, nomeDoArquivo, callbaclImagemCriada) => {
  const novoCaminho = `./assets/images/${nomeDoArquivo}.jpg`;

  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbaclImagemCriada(novoCaminho));
};
