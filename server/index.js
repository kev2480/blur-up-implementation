let express = require('express')
let path = require('path')
let app = express()
let fs = require('fs')
let sharp = require('sharp')
let sqip = require('sqip')

const staticDir = path.join(__dirname, 'static')
let Primitives = []

/** Create small versions of all the images in the static directory */
fs.readdir(staticDir, (err,files) => {
    if (err) throw err
    files.forEach((file) => {
      sharp(`${staticDir}/${file}`)
      .resize(20)
      .toFile(`${staticDir}/small/${file}`, (err, info) => { console.log(err, info) })

      try {
        let Primitive = sqip({
          filename: `${staticDir}/${file}`,
          numberOfPrimitives: 50
        })
        Primitives.push({
          file,
          Primitive
        })
      } catch(err) {
        console.log('derp')
      }
    })

 })


// Define the port to run on
app.set('port', 3000)

app.use(express.static(staticDir))

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Pass to next layer of middleware
    next();
});

app.get('/primitive/:filename', (req, res) => {
  let Primitive = Primitives.find(Primitive => Primitive.file === req.params.filename)
  if (Primitive) {
    res.send(Primitive)
  } else {
    res.status(404).send('Not found')
  }
})

// Listen for requests
let server = app.listen(app.get('port'), () => {
  let port = server.address().port
  console.log('Magic happens on port ' + port)
})
