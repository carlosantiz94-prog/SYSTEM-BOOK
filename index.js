// DECLARAR LA COLECCION DE LIBROS
const libros = [
  {
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    idioma: "Español",
    precio: 12.5,
    formato: "Tapa dura",
    isbn: "9788435348435",
    descripcion: "Una aventura épica de un hobbit llamado Bilbo Bolsón.",
    estado: "Nuevo",
    ubicacion: "Oxford, Reino Unido",
    fecha_publicacion: "1937-09-21",
    editorial: "Houghton Mifflin",
    paginas: 304,
    dimensiones: "5.5 x 8.2 pulgadas",
    peso: "13.9 onzas"
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    idioma: "Español",
    precio: 15.0,
    formato: "Tapa blanda",
    isbn: "9780307474728",
    descripcion: "La historia de la familia Buendía en Macondo.",
    estado: "Nuevo",
    ubicacion: "Buenos Aires, Argentina",
    fecha_publicacion: "1967-05-30",
    editorial: "Sudamericana",
    paginas: 417,
    dimensiones: "6 x 9 pulgadas",
    peso: "14 onzas"
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Clásico",
    idioma: "Español",
    precio: 18.0,
    formato: "Tapa dura",
    isbn: "9788491050293",
    descripcion: "Las aventuras del ingenioso hidalgo Don Quijote.",
    estado: "Usado",
    ubicacion: "Madrid, España",
    fecha_publicacion: "1605-01-16",
    editorial: "Francisco de Robles",
    paginas: 863,
    dimensiones: "6 x 9 pulgadas",
    peso: "22 onzas"
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    idioma: "Inglés",
    precio: 10.99,
    formato: "Tapa blanda",
    isbn: "9780451524935",
    descripcion: "Una sociedad controlada por el Gran Hermano.",
    estado: "Nuevo",
    ubicacion: "Londres, Reino Unido",
    fecha_publicacion: "1949-06-08",
    editorial: "Secker & Warburg",
    paginas: 328,
    dimensiones: "5 x 8 pulgadas",
    peso: "12 onzas"
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance",
    idioma: "Inglés",
    precio: 9.5,
    formato: "Tapa blanda",
    isbn: "9780141439518",
    descripcion: "Una historia de amor y prejuicios sociales.",
    estado: "Nuevo",
    ubicacion: "Bath, Reino Unido",
    fecha_publicacion: "1813-01-28",
    editorial: "T. Egerton",
    paginas: 279,
    dimensiones: "5 x 8 pulgadas",
    peso: "10 onzas"
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    genero: "Drama psicológico",
    idioma: "Ruso",
    precio: 14.0,
    formato: "Tapa dura",
    isbn: "9780140449136",
    descripcion: "La lucha moral de un joven tras cometer un asesinato.",
    estado: "Nuevo",
    ubicacion: "San Petersburgo, Rusia",
    fecha_publicacion: "1866-01-01",
    editorial: "The Russian Messenger",
    paginas: 671,
    dimensiones: "6 x 9 pulgadas",
    peso: "20 onzas"
  },
  {
    titulo: "La Odisea",
    autor: "Homero",
    genero: "Épico",
    idioma: "Griego",
    precio: 11.0,
    formato: "Tapa blanda",
    isbn: "9780140268867",
    descripcion: "El viaje de Odiseo de regreso a Ítaca.",
    estado: "Nuevo",
    ubicacion: "Atenas, Grecia",
    fecha_publicacion: "800 a.C.",
    editorial: "Penguin Classics",
    paginas: 541,
    dimensiones: "5 x 8 pulgadas",
    peso: "15 onzas"
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    genero: "Fantasía",
    idioma: "Español",
    precio: 20.0,
    formato: "Tapa dura",
    isbn: "9788478884452",
    descripcion: "El inicio de la saga del joven mago Harry Potter.",
    estado: "Nuevo",
    ubicacion: "Edimburgo, Escocia",
    fecha_publicacion: "1997-06-26",
    editorial: "Bloomsbury",
    paginas: 256,
    dimensiones: "6 x 9 pulgadas",
    peso: "16 onzas"
  },
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Fábula",
    idioma: "Francés",
    precio: 8.0,
    formato: "Tapa blanda",
    isbn: "9780156012195",
    descripcion: "Un niño que viaja por planetas y reflexiona sobre la vida.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1943-04-06",
    editorial: "Reynal & Hitchcock",
    paginas: 96,
    dimensiones: "5 x 7 pulgadas",
    peso: "8 onzas"
  },
  {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    genero: "Ciencia ficción",
    idioma: "Español",
    precio: 13.5,
    formato: "Tapa blanda",
    isbn: "9780439023481",
    descripcion: "Una lucha por la supervivencia en un mundo distópico.",
    estado: "Nuevo",
    ubicacion: "Connecticut, EE.UU.",
    fecha_publicacion: "2008-09-14",
    editorial: "Scholastic Press",
    paginas: 374,
    dimensiones: "5.5 x 8 pulgadas",
    peso: "14 onzas"
  },
  
{
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    genero: "Fantasía",
    idioma: "Español",
    precio: 17.0,
    formato: "Tapa dura",
    isbn: "9788499082470",
    descripcion: "La historia de Kvothe, un joven prodigio.",
    estado: "Nuevo",
    ubicacion: "Wisconsin, EE.UU.",
    fecha_publicacion: "2007-03-27",
    editorial: "DAW Books",
    paginas: 662,
    dimensiones: "6 x 9 pulgadas",
    peso: "21 onzas"
  },
  {
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    genero: "Thriller",
    idioma: "Español",
    precio: 14.99,
    formato: "Tapa blanda",
    isbn: "9780307474278",
    descripcion: "Un misterio que mezcla religión y arte.",
    estado: "Nuevo",
    ubicacion: "Nueva York, EE.UU.",
    fecha_publicacion: "2003-03-18",
    editorial: "Doubleday",
    paginas: 489,
    dimensiones: "6 x 9 pulgadas",
    peso: "18 onzas"
  },
  {
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    genero: "Misterio",
    idioma: "Español",
    precio: 16.5,
    formato: "Tapa dura",
    isbn: "9788408172173",
    descripcion: "Un joven descubre un libro maldito en Barcelona.",
    estado: "Nuevo",
    ubicacion: "Barcelona, España",
    fecha_publicacion: "2001-04-01",
    editorial: "Planeta",
    paginas: 576,
    dimensiones: "6 x 9 pulgadas",
    peso: "19 onzas"
  },
  {
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    genero: "Ficción",
    idioma: "Español",
    precio: 12.0,
    formato: "Tapa blanda",
    isbn: "9780061122415",
    descripcion: "Un viaje espiritual en busca de un tesoro.",
    estado: "Nuevo",
    ubicacion: "Río de Janeiro, Brasil",
    fecha_publicacion: "1988-01-01",
    editorial: "HarperOne",
    paginas: 208,
    dimensiones: "5 x 8 pulgadas",
    peso: "9 onzas"
  },
  {
    titulo: "It",
    autor: "Stephen King",
    genero: "Terror",
    idioma: "Español",
    precio: 18.99,
    formato: "Tapa dura",
    isbn: "9781501142970",
    descripcion: "Un grupo de amigos enfrenta a un ser maligno.",
    estado: "Nuevo",
    ubicacion: "Maine, EE.UU.",
    fecha_publicacion: "1986-09-15",
    editorial: "Viking",
    paginas: 1138,
    dimensiones: "6.5 x 9.5 pulgadas",
    peso: "36 onzas"
  },
  {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    idioma: "Español",
    precio: 35.0,
    formato: "Tapa dura",
    isbn: "9780544003415",
    descripcion: "La épica lucha por el Anillo Único.",
    estado: "Nuevo",
    ubicacion: "Oxford, Reino Unido",
    fecha_publicacion: "1954-07-29",
    editorial: "Allen & Unwin",
    paginas: 1216,
    dimensiones: "6.5 x 9.5 pulgadas",
    peso: "40 onzas"
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    genero: "Terror",
    idioma: "Inglés",
    precio: 11.99,
    formato: "Tapa blanda",
    isbn: "9780141439846",
    descripcion: "La historia del famoso vampiro conde Drácula.",
    estado: "Nuevo",
    ubicacion: "Londres, Reino Unido",
    fecha_publicacion: "1897-05-26",
    editorial: "Archibald Constable",
    paginas: 418,
    dimensiones: "5 x 8 pulgadas",
    peso: "12 onzas"
  },
  {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    genero: "Aventura",
    idioma: "Inglés",
    precio: 13.99,
    formato: "Tapa blanda",
    isbn: "9780142437247",
    descripcion: "La obsesión del capitán Ahab por la ballena blanca.",
    estado: "Nuevo",
    ubicacion: "Nueva York, EE.UU.",
    fecha_publicacion: "1851-10-18",
    editorial: "Harper & Brothers",
    paginas: 635,
    dimensiones: "6 x 9 pulgadas",
    peso: "22 onzas"
  },
  {
    titulo: "La isla del tesoro",
    autor: "Robert Louis Stevenson",
    genero: "Aventura",
    idioma: "Inglés",
    precio: 9.99,
    formato: "Tapa blanda",
    isbn: "9780141321004",
    descripcion: "Una búsqueda de tesoros en alta mar.",
    estado: "Nuevo",
    ubicacion: "Edimburgo, Escocia",
    fecha_publicacion: "1883-11-14",
    editorial: "Cassell & Company",
    paginas: 240,
    dimensiones: "5 x 8 pulgadas",
    peso: "10 onzas"
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    genero: "Terror",
    idioma: "Inglés",
    precio: 10.99,
    formato: "Tapa blanda",
    isbn: "9780143131847",
    descripcion: "Un científico crea vida y enfrenta las consecuencias.",
    estado: "Nuevo",
    ubicacion: "Londres, Reino Unido",
    fecha_publicacion: "1818-01-01",
    editorial: "Lackington, Hughes, Harding, Mavor & Jones",
    paginas: 280,
    dimensiones: "5 x 8 pulgadas",
    peso: "11 onzas"
  }
];
``
// FUNCION PARA AGREGAR LIBROS
const addBook = (titulo, autor, año, genero,idioma,precio,formato,descripcion,estado,ubicacion,fecha_publicacion,editorial,paginas,dimensiones,peso) => {
  const book = { titulo, autor, año, genero,idioma,precio,formato,descripcion,estado,ubicacion,fecha_publicacion,editorial,paginas,dimensiones,peso };
  libros.push(book);
  console.log(`Libro agregado: ${title}`);
};
// LISTAR LIBROS
const listBooks = () => {
  console.log("Lista de libros:");
  libros.forEach((libros, index) => {
    console.log(`${index + 1}. ${libros.title} - ${libros.author} (${libros.year} - ${libros.genero} - ${libros.idioma} - ${libros.precio} - ${libros.formato} - ${libros.isbn} - ${libros.descripcion} - ${libros.estado} - ${libros.ubicacion} - ${libros.fecha_publicacion} - ${libros.editorial} - ${libros.paginas} - ${libros.dimensiones} - ${libros.peso})`);
  });
};
``
// FUNCION PARA BUSCAR LIBROS POR TITULO
const findBook = (titulo) => {
  const found = libros.find(libro => libros.title.toLowerCase() === title.toLowerCase());
  if (found) {
    console.log(`Libro encontrado: ${found.title} - ${found.author} - ${found.year} - ${found.genero} - ${found.idioma} - ${found.precio} - ${found.formato} - ${found.isbn} - ${found.descripcion} - ${found.estado} - ${found.ubicacion} - ${found.fecha_publicacion} - ${found.editorial} - ${found.paginas} - ${found.dimensiones} - ${found.peso}`);
  } else {
    console.log("Libro no encontrado.");
  }
};
// ELIMINAR LIBROS
const deleteBook = (titulo) => {
  const index = libros.findIndex(libros => libros.title.toLowerCase() === title.toLowerCase());
  if (index !== -1) {
    libros.splice(index, 1);
    console.log(`Libro eliminado: ${title} - ${libros[index].author} - ${libros[index].year} - ${libros[index].genero} - ${libros[index].idioma} - ${libros[index].precio} - ${libros[index].formato} - ${libros[index].isbn} - ${libros[index].descripcion} - ${libros[index].estado} - ${libros[index].ubicacion} - ${libros[index].fecha_publicacion} - ${libros[index].editorial} - ${libros[index].paginas} - ${libros[index].dimensiones} - ${libros[index].peso}`);
  } else {
    console.log("Libro no encontrado para eliminar.");
  }
};
// METODO MAP
const titulo = libros.map(libros => libros.title);
  return libros.title;

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

// CUADRO DE LISTAS DE LIBROS
const LibrosInforme = Libros.map((libros) => {
    return {
Título: libros.title,
Autor: libros.author,
Año: libros.year,
Género: libros.genero
    }
    })


