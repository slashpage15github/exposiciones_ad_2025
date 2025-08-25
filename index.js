// node index.js

//Declaración con Express
const express = require("express");
const app = express();
app.use(express.json());

// Base de datos simulada(JSON)
let usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];

// READ
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// CREATE
app.post("/usuarios", (req, res) => {
  const nuevo = { id: usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1, nombre: req.body.nombre };
  usuarios.push(nuevo);
  res.json(nuevo);
});

// UPDATE
app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  if (!usuario) return res.status(404).send("Usuario no encontrado");
  usuario.nombre = req.body.nombre;
  res.json(usuario);
});

// DELETE
app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter(u => u.id !== id);
  res.send("Usuario eliminado");
});

// Servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});