


const express = require('express'),
championC = require('./controllers/champion_controller'),
champRando = require('./controllers/randChamp_controller'),
app = express();

app.use(express.json());

app.get("/api/random-champ", champRando.getRandomChamp)

app.get("/api/select-champ", championC.getChampions);
app.post("/api/select-champ", championC.selectChampion);
app.put("/api/select-champ/:id", championC.editName);
app.delete("/api/select-champ/:id", championC.deleteChampion);

app.listen(3003, () => console.log('Server is running on port 3003'))
