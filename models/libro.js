const mongoose = require('moongoose');
mongoose.connect("mongodb://localhost:27017/Biblioteca", {
useUnifiedTopology: true,
useNewUrlParser: true,
});
const LibrosSchema = new mongoose.Schema({
title: String,
autor: String
}, { collection: 'MyBongoLibros' });

const Libro = mongoose.model('Libro', LibrosSchema);

module.exports = Libro;