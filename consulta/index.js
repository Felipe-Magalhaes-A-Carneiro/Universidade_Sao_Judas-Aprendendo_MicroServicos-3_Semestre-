const express = require("express");
const app = express();
app.use(express.json());
const baseConsulta = {};

app.get("/lembretes", (req, res) =>{

});

app.get("/eventos", (req, res) => {
    
});

app.listen (6000, () => console.log("Consulta. Porta 6000."));