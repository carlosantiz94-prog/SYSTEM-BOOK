// DECLARAR LA COLECCION DE LIBROS
const books = [
  { title: "Cien Años de Soledad", author: "Gabriel García Márquez", year: 1967 },
];
``
// FUNCION PARA AGREGAR LIBROS
const addBook = (title, author, year) => {
  const book = { title, author, year };
  books.push(book);
  console.log(`Libro agregado: ${title}`);
};
// LISTAR LIBROS
const listBooks = () => {
  console.log("Lista de libros:");
  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} - ${book.author} (${book.year})`);
  });
};
``
// FUNCION PARA BUSCAR LIBROS POR TITULO
const findBook = (title) => {
  const found = books.find(book => book.title.toLowerCase() === title.toLowerCase());
  if (found) {
    console.log(`Libro encontrado: ${found.title} - ${found.author} (${found.year})`);
  } else {
    console.log("Libro no encontrado.");
  }
};
// ELIMINAR LIBROS
const deleteBook = (title) => {
  const index = books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());
  if (index !== -1) {
    books.splice(index, 1);
    console.log(`Libro eliminado: ${title}`);
  } else {
    console.log("Libro no encontrado para eliminar.");
  }
};
// METODO MAP
const title = books.map(book => book.title);
  return book.title;

  console.log(title);
``
// METODO FILTER
const libroscaros = libros.filter((libro) => {
  return libro.precio > 20;

  console.log(libroscaros)

  const librosFormato = libros.filter((libro) =>{
    return libro.formato === "tapa blanda"
})
  console.log(librosFormato.length)
});

// METODO REDUCE
const total = libros.reduce((acc, libro) => {
    return total + libro.precio;
}, 0);
console.log(total);

// METODO FIND
const libro = libros.find((libro) => {
    return libro.idioma === "español";
    console.log(libroTolkien)
});

// METODO SOME
const algunos = libros.some((libro) => {
    return libro.idioma === "español";
    console.log(algunos)
});

// METODO EVERY
const todos = libros.every((libro) => {
    return libro.idioma === "español";
    console.log(todos)
});

// METODO SLICE
const librosPorFormato = libros.slice(0, 2);
console.log(librosPorFormato);

// METODO SORT
const librosOrdenados = libros.sort((a, b) => {
    return a.precio - b.precio;
});
console.log(librosOrdenados);



