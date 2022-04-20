const app = require('./src/app.js')

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`Servidor rodando na port: ${port}`)
})