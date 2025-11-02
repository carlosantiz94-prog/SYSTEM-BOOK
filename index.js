// DECLARAR LA COLECCION DE LIBROS
const books = [];
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
// PRUEBA BASICA
addBook("Cien Años de Soledad", "Gabriel García Márquez", 1967);
addBook("El Principito", "Antoine de Saint-Exupéry", 1943);
listBooks();
findBook("El Principito");
deleteBook("Cien Años de Soledad");
listBooks();
``