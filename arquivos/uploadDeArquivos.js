const fs = require('fs');

fs.createReadStream('./assets/maya.jpg')
  .pipe(fs.createWriteStream('./assets/maya-stream.jpg'))
  .on('finish', () => console.log('Imagem foi escrita com sucesso'));
