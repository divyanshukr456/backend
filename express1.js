import express from 'express'

const app = express()


app.use(function (req, res, next) {
   console.log("middleware is running") ;
   next() ;
})
app.use(function (req, res, next) {
   console.log("middleware is one more time") ;
   next() ;
})
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/about', (req, res) => {
  res.send('About Page of this website')
})
app.get('/product', (req, res,next) => {
  return next(new Error('Something went wrong!'))
 }) ;

app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})


