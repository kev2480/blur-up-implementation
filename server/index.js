let express = require('express')
let path = require('path')
let app = express()
let fs = require('fs')
let sharp = require('sharp')
const staticDir = path.join(__dirname, 'static')

/** Create small versions of all the images in the static directory */
fs.readdir(staticDir, (err,files) => {
    if (err) throw err
    files.forEach((file) => {
      sharp(`${staticDir}/${file}`)
      .resize(20)
      .toFile(`${staticDir}/small/${file}`, (err, info) => { console.log(err, info) } )
    })
 })


// Define the port to run on
app.set('port', 3000)

app.use(express.static(staticDir))

// Listen for requests
let server = app.listen(app.get('port'), () => {
  let port = server.address().port
  console.log('Magic happens on port ' + port)
});
