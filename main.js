const ffmpeg = require('fluent-ffmpeg')
console.log(ffmpeg)



ffmpeg('./audio2.m4a')
  .toFormat('mp3')
  .saveToFile('outputConverted.mp3')
  .on('progress', (_progress) => {
    console.log('Convirtiendo...')
    console.log(`Procesando: ${_progress.targetSize} KB convertidos...`)
  })
  .on('end', () => {
    console.log('Conversion complete')
  })
  .on('error', (_err) => {
    console.log('Error found', _err)
  })
