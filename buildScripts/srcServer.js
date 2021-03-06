import express from 'express'
import path from 'path'
import open from  'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

/*es-lint disable no-console*/

var port = 8080
var app = express()

//config webapck to express
var compiler =webpack(config)

app.use(require('webpack-dev-middleware')(compiler,{
    noinfo:true,
    PublicPath: config.output.PublicPath
}))
//
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../src/index.html'))
})
 

app.listen(port , function (err) {
    if (err){
        console.log(err)
    } else {
        open('http://localhost:'+port)
    }
})