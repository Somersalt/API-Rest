import app from './src/app.js'

const http = import("http")
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})