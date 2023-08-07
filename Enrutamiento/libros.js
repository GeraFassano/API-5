const express = require("express");
const bookrouter = express.Router();
const Libro = require("../models/libro");

router.get("/", async (req, res) => {
try {
const libros = await Libro.find();
res.json(libros);
} catch (error) {
res.status(500).json({ error: "No se pudieron obtener los libros" });
}
});

bookrouter.post("/", async (req, res) => {
try {
const nuevoLibro = new Libro(req.body);
await nuevoLibro.save();
res.json(nuevoLibro);
} catch (error) {
res.status(500).json({ error: "No se pudo crear el libro" });
}
});

bookrouter.put("/:id", async (req, res) => {
try {
const Libro = await Libro.findByIdAndUpdate(req.params.id, req.body,
{
new: true,
});
res.json(Libro);
} catch (error) {
res.status(500).json({ error: "No se actualizo el libro" });
}
});

bookrouter.delete('/:id', async (req, res) => {
try {
await Libro.findByIdAndDelete(req.params.id);
res.json({ message: 'Libro eliminado correctamente' });
} catch (error) {
res.status(500).json({ error: 'No se elimino el libro' });
}
});
module.exports = bookrouter;
