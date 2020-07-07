const minify = require('minify')
const fs = require('fs')
const readline = require('readline')

  const rs = fs.createReadStream('./js/main.js')
  const ws = fs.createWriteStream('./js/main.bak.js')

const rl = readline.createInterface({
  input: rs,
  output: ws,
})

i=0
rl.on('line', (lineString) => {
  if(i++!=0){
    // console.log(lineString)
    ws.write(lineString + '\n')
  }
})

rl.on('close',() => {})

minify('./js/main.bak.js')
  .then((result)=>{
    console.log('----- minified -----\n')
    console.log(result+'\n')
    console.log(`${result.length} chars`)
    console.log('--------------------')
  })
  .catch(console.error)
