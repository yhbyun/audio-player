var AV = require('av');

require('mp3');
require('vorbis.js'); // automatically loads the ogg.js demuxer
require('flac.js');
require('alac');
require('aac');

if (! process.argv[2]) {
  console.log('Usage: node app.js audio-file[mp3, ogg]');
  process.exit(-1);
}

AV.Player.fromFile(process.argv[2]).play();
