const express = require('express');

const app = express();

const port = 3000;

const path = require('path');

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send('<a href="/home" >Home</a>')
});

const homePath = path.join(__dirname, 'views/home.html');
app.get('/home', (req, res) => {
    res.sendFile(homePath);
});

/*Colocarlo al final para que no genere conflictos con las demás rutas*/
app.get('*', (req, res) => {
    res.send(`
    <div>
       <h1>Esta página no existe</h1>
       <a href="/home">Volver al Home</a>    
    </div>
    `)
})

app.listen(port, () => {
    console.log(`Servidor levantado correctamente en el puerto ${port} 
    Ir a la página: http://localhost:3000/`);
});

