/* Esercizio

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire 
con nuove funzionalità sulla base di quello che impareremo.

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

Creiamo un array dove inserire una lista di almeno 5 post, 
per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, 
partendo da un array.

Configuriamo gli asset statici sull’applicazione in modo che si possano 
visualizzare le immagini associate ad ogni post.

Testare le chiamate su Postman! */

/* Import express */
const express = require("express");
const app = express();
const port = 3000;

/* First route */
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

const bachecaPost = [
  {
    titolo: "Ciambellone",
    contenuto: "Ricetta ciambellone",
    immagine: "images/ciambellone.jpeg",
    tags: ["ciambellone", "ricetta", "dolce"],
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto: "Ricetta cracker alla barbabietola",
    immagine: "images/cracker_barbabietola.jpeg",
    tags: ["cracker", "spuntino", "dolce"],
  },
  {
    titolo: "Pane fritto dolce",
    contenuto: "Ricetta pane fritto dolce",
    immagine: "images/pane_fritto_dolce.jpeg",
    tags: ["pane fritto dolce", "ricetta", "dolce"],
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto: "Ricetta pasta alla barbabietola",
    immagine: "images/pasta_barbabietola.jpeg",
    tags: ["pasta alla barbabietola", "ricetta", "pasta"],
  },
  {
    titolo: "Torta paesana",
    contenuto: "Ricetta Torta paesana",
    immagine: "images/torta_paesana.jpeg",
    tags: ["torta paesana", "ricetta", "dolce"],
  },
];

app.get("/bacheca", (req, res) => {
  res.send(bachecaPost);
});

app.listen(port, () => {
  console.log(`Example app listening on port`);
});
1;
