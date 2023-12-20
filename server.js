import express from 'express';
import Task from './Models/Task.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));


app.post("/add", async function (req, res) {
  const nv_ajout = new Task();
  nv_ajout.word = req.body.word
  nv_ajout.translation = req.body.translation
  await nv_ajout.save();
  res.redirect('/');
});

// app.post("/reponse", async function (req, res) {
//   const response = new Task();
//   response.reponse = req.body.reponse
//   const i = mots[2].word
//   const correct = response.reponse == i.translation;
//   res.redirect("/");
// });


app.get("/delete/:id_word", async function (req, res) {
  await Task.delete({ id_word : req.params.id_word });
  res.redirect('/');
});

// app.get("/", async function (req, res) {
//   const mots = await Task.loadMany({ word: req.params.word });
//   const traductions = await Task.loadMany({translation: req.params.translation});
//   res.render('listTasks.ejs', { mots, traductions});
// });

app.get("/", async (req, res) => {
  const mots = await Task.loadMany({});
  res.render('listTasks.ejs', { mots });
});




app.listen(4000);
