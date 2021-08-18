const fs = require('fs');

fs.createReadStream('./assets/maya.jpg')
  .pipe(fs.createWriteStream('./assets/maua-stream'))
  .on('finish', () => console.log('Imagem foi escrita com sucesso'));
