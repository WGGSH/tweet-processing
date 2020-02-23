const minify = require('minify')

minify('./js/main.js')
  .then((result)=>{
    console.log('----- minified -----\n')
    console.log(result+'\n')
    console.log(`${result.length} chars`)
    console.log('--------------------')
  })
  .catch(console.error)
