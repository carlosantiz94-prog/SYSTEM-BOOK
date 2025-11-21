// system-book.js
// ==========================
// 📚 Sistema de Gestión de Libros (versión extendida - todo en un solo archivo)
// ==========================
const readline = require("readline");

// ==========================
// 🔸 Variables Globales
// ==========================
let pilaLibros = []; // Pila principal de libros (LIFO)

const generosValidos = [
  "ficción",
  "no ficción",
  "ciencia ficción",
  "fantasía",
  "misterio",
  "romance",
  "historia",
  "biografía",
  "autoayuda",
  "técnico",
  "terror",
];
const formatosValidos = ["tapa dura", "tapa blanda", "ebook", "audiolibro", "digital"];
const estadosValidos = ["nuevo", "usado", "como nuevo", "excelente", "bueno"];
const idiomasValidos = ["español", "inglés", "francés", "alemán", "italiano", "portugués", "ruso", "griego"];

// Interfaz readline (única instancia)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ==========================
// 🧱 Función Constructora de Libro
// ==========================
const crearLibro = (
  titulo,
  autor,
  genero,
  idioma,
  precio,
  formato,
  isbn,
  descripcion,
  estado,
  ubicacion,
  fecha_publicacion,
  editorial,
  paginas,
  dimensiones,
  peso
) => ({
  titulo,
  autor,
  genero,
  idioma,
  precio: Number(precio) || 0,
  formato,
  isbn,
  descripcion,
  estado,
  ubicacion,
  fecha_publicacion,
  editorial,
  paginas: Number(paginas) || 0,
  dimensiones,
  peso,
  fecha_agregado: new Date().toLocaleString(),
});

// ==========================
// 📘 Colección Inicial (30 libros)
// ==========================
const librosIniciales = () => [
  crearLibro("1984", "George Orwell", "ficción", "inglés", 50, "tapa blanda", "ISBN009", "Distopía política y social.", "usado", "Estante B1", "1949", "Secker & Warburg", 328, "14x21cm", "500g"),
  crearLibro("El Hobbit", "J.R.R. Tolkien", "fantasía", "inglés", 65, "tapa blanda", "ISBN002", "Aventura en la Tierra Media.", "como nuevo", "Estante A2", "1937", "Allen & Unwin", 310, "15x22cm", "550g"),
  crearLibro("Cien años de soledad", "Gabriel García Márquez", "ficción", "español", 60, "tapa dura", "ISBN010", "Realismo mágico en Macondo.", "como nuevo", "Estante B2", "1967", "Sudamericana", 471, "15x22cm", "700g"),
  crearLibro("Dune", "Frank Herbert", "ciencia ficción", "inglés", 85, "tapa dura", "ISBN015", "Poder y religión en Arrakis.", "nuevo", "Estante B6", "1965", "Chilton Books", 688, "16x23cm", "900g"),
  crearLibro("Don Quijote de la Mancha", "Miguel de Cervantes", "ficción", "español", 90, "tapa dura", "ISBN011", "Clásico universal.", "excelente", "Estante B3", "1605", "Francisco de Robles", 863, "17x24cm", "1kg"),
  crearLibro("Rayuela", "Julio Cortázar", "ficción", "español", 65, "tapa dura", "ISBN022", "Novela experimental.", "excelente", "Estante F3", "1963", "Sudamericana", 736, "15x23cm", "900g"),
  crearLibro("El alquimista", "Paulo Coelho", "ficción", "portugués", 50, "tapa blanda", "ISBN020", "Viaje espiritual.", "nuevo", "Estante C2", "1988", "Rocco", 208, "14x20cm", "350g"),
  crearLibro("La sombra del viento", "Carlos Ruiz Zafón", "ficción", "español", 65, "tapa dura", "ISBN019", "Intriga en Barcelona.", "excelente", "Estante C1", "2001", "Planeta", 565, "15x23cm", "800g"),
  crearLibro("Los miserables", "Victor Hugo", "ficción", "francés", 70, "ebook", "ISBN012", "Justicia y redención.", "nuevo", "Digital", "1862", "A. Lacroix", 1463, "Digital", "0g"),
  crearLibro("El Silmarillion", "J.R.R. Tolkien", "fantasía", "inglés", 85, "tapa dura", "ISBN003", "Mitos de la Tierra Media.", "nuevo", "Estante A3", "1977", "Allen & Unwin", 365, "16x23cm", "850g"),
  crearLibro("Harry Potter y la piedra filosofal", "J.K. Rowling", "fantasía", "inglés", 55, "tapa dura", "ISBN013", "Inicio de la saga del joven mago.", "nuevo", "Estante B4", "1997", "Bloomsbury", 309, "14x21cm", "600g"),
  crearLibro("El Señor de los Anillos", "J.R.R. Tolkien", "fantasía", "inglés", 80, "tapa dura", "ISBN001", "Trilogía épica.", "nuevo", "Estante A1", "1954", "Allen & Unwin", 423, "15x22cm", "800g"),
  crearLibro("It", "Stephen King", "terror", "inglés", 75, "tapa blanda", "ISBN016", "Entidad maligna en Derry.", "como nuevo", "Estante B7", "1986", "Viking Press", 1138, "15x23cm", "950g"),
  crearLibro("Asesinato en el Orient Express", "Agatha Christie", "misterio", "inglés", 55, "tapa blanda", "ISBN018", "Crimen en un tren.", "excelente", "Estante B9", "1934", "Collins Crime Club", 256, "14x21cm", "480g"),
  crearLibro("Orgullo y prejuicio", "Jane Austen", "romance", "inglés", 50, "tapa dura", "ISBN017", "Historia clásica de amor.", "nuevo", "Estante B8", "1813", "T. Egerton", 432, "15x22cm", "700g"),
  crearLibro("Beren y Lúthien", "J.R.R. Tolkien", "fantasía", "inglés", 60, "tapa dura", "ISBN006", "Historia de amor inmortal.", "nuevo", "Estante A6", "2017", "Allen & Unwin", 288, "15x22cm", "650g"),
  crearLibro("Las cartas de Tolkien", "J.R.R. Tolkien", "biografía", "inglés", 75, "tapa blanda", "ISBN008", "Correspondencia personal.", "nuevo", "Estante A8", "1981", "Allen & Unwin", 480, "14x21cm", "600g"),
  crearLibro("Cuentos inconclusos", "J.R.R. Tolkien", "fantasía", "inglés", 70, "tapa dura", "ISBN004", "Relatos complementarios.", "nuevo", "Estante A4", "1980", "Allen & Unwin", 400, "16x23cm", "820g"),
  crearLibro("La casa de los espíritus", "Isabel Allende", "ficción", "español", 60, "tapa dura", "ISBN023", "Saga familiar mágica.", "nuevo", "Estante F4", "1982", "Plaza & Janés", 490, "15x22cm", "750g"),
  // Añadimos 10 libros más para llegar a 30
  crearLibro("Inferno", "Dan Brown", "ficción", "inglés", 60, "tapa blanda", "ISBN030", "Thriller histórico.", "nuevo", "Estante D1", "2013", "Doubleday", 480, "15x22cm", "700g"),
  crearLibro("La Odisea", "Homero", "historia", "griego", 45, "tapa dura", "ISBN031", "Poema épico clásico.", "nuevo", "Estante D2", "800 a.C.", "Antigua Grecia", 541, "16x23cm", "800g"),
  crearLibro("El nombre del viento", "Patrick Rothfuss", "fantasía", "inglés", 75, "tapa dura", "ISBN032", "Crónica del asesino de reyes.", "nuevo", "Estante D3", "2007", "DAW Books", 662, "15x23cm", "850g"),
  crearLibro("Drácula", "Bram Stoker", "terror", "inglés", 60, "tapa dura", "ISBN033", "Clásico del vampirismo.", "usado", "Estante D4", "1897", "Archibald Constable", 418, "14x22cm", "720g"),
  crearLibro("Fahrenheit 451", "Ray Bradbury", "ciencia ficción", "inglés", 55, "tapa blanda", "ISBN034", "Sociedad sin libros.", "nuevo", "Estante D5", "1953", "Ballantine Books", 256, "14x21cm", "500g"),
  crearLibro("El Principito", "Antoine de Saint-Exupéry", "ficción", "francés", 40, "tapa blanda", "ISBN035", "Fábula filosófica.", "nuevo", "Estante D6", "1943", "Reynal & Hitchcock", 96, "13x20cm", "300g"),
  crearLibro("Moby Dick", "Herman Melville", "ficción", "inglés", 65, "tapa dura", "ISBN036", "Caza del gran cachalote.", "excelente", "Estante D7", "1851", "Harper & Brothers", 635, "15x22cm", "950g"),
  crearLibro("Crimen y castigo", "Fiódor Dostoyevski", "ficción", "ruso", 70, "tapa dura", "ISBN037", "Conflicto moral y psicológico.", "nuevo", "Estante D8", "1866", "The Russian Messenger", 671, "16x23cm", "880g"),
  crearLibro("Los juegos del hambre", "Suzanne Collins", "ficción", "inglés", 55, "tapa blanda", "ISBN038", "Lucha por la supervivencia.", "nuevo", "Estante D9", "2008", "Scholastic Press", 374, "14x21cm", "600g"),
  crearLibro("El código Da Vinci", "Dan Brown", "misterio", "inglés", 70, "tapa blanda", "ISBN039", "Misterio religioso y arte.", "nuevo", "Estante D10", "2003", "Doubleday", 689, "15x23cm", "800g"),
];

// ==========================
// 🧮 Operaciones de la Pila (push / pop)
// ==========================
const agregarLibro = (libro) => {
  pilaLibros.push(libro);
  console.log(`✅ Libro agregado: ${libro.titulo} - ${libro.autor}`);
};

const quitarLibro = () => {
  if (pilaLibros.length === 0) {
    console.log("⚠️ No hay libros en la pila.");
    return null;
  }
  const eliminado = pilaLibros.pop();
  console.log(`🗑️ Libro eliminado: ${eliminado.titulo} - ${eliminado.autor}`);
  return eliminado;
};

// Quitar N libros
const quitarNLibros = (n) => {
  for (let i = 0; i < n; i++) {
    if (pilaLibros.length === 0) {
      console.log("⚠️ La pila se vació antes de completar la operación.");
      break;
    }
    quitarLibro();
  }
};

// Mostrar pila actual
const mostrarPila = () => {
  console.log("\n📚 LISTA ACTUAL DE LIBROS (tope en la última posición):");
  if (pilaLibros.length === 0) return console.log("La pila está vacía.");
  pilaLibros.forEach((libro, i) => {
    console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} (${libro.editorial}) - $${libro.precio} - ${libro.paginas} páginas`);
  });
  console.log(`\nTotal: ${pilaLibros.length} libros\n`);
};

// Estadísticas
const mostrarEstadisticas = () => {
  const total = pilaLibros.length;
  const precioTotal = pilaLibros.reduce((acc, l) => acc + (Number(l.precio) || 0), 0);
  const promedio = total ? (precioTotal / total).toFixed(2) : 0;

  console.log("\n📈 ESTADÍSTICAS DE LA COLECCIÓN:");
  console.log(`Total de libros: ${total}`);
  console.log(`Precio total: $${precioTotal}`);
  console.log(`Precio promedio: $${promedio}`);

  const distribucion = {};
  pilaLibros.forEach((l) => (distribucion[l.genero] = (distribucion[l.genero] || 0) + 1));
  console.log("\n📚 Distribución por género:");
  Object.entries(distribucion).forEach(([g, c]) => console.log(`- ${g}: ${c}`));
};

// Reinicializar coleccion con 30 libros
function reinicializarLibros() {
  pilaLibros = librosIniciales();
  console.log("🔁 Colección reiniciada con 30 libros.");
}

// ==========================
// 🏢 Funciones exigidas por el ejercicio
// ==========================

// 1) Map: listar Título, Autor, Editorial, Precio
const listarConMap = () => {
  if (pilaLibros.length === 0) return console.log("La pila está vacía.");
  console.log("\n📖 Listado general (map) — Título | Autor | Editorial | Precio:");
  const lista = pilaLibros.map((libro) => ({
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
  }));
  lista.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.editorial} | $${l.precio}`));
  console.log(`\nTotal de libros listados: ${pilaLibros.length}\n`);
};

// 2) Modificar array para dejar solo 5 libros de una editorial específica
const dejarSoloCincoPorEditorial = (nombreEditorial) => {
  const librosEditorial = pilaLibros.filter(
    (libro) => libro.editorial && libro.editorial.toLowerCase() === nombreEditorial.toLowerCase()
  );

  if (librosEditorial.length === 0) {
    console.log(`❌ No hay libros de la editorial "${nombreEditorial}".`);
    return;
  }

  const tomarCinco = librosEditorial.slice(0, 5);
  pilaLibros = [...tomarCinco];
  console.log(`✅ Se modificó la pila para contener hasta 5 libros de "${nombreEditorial}".`);
  mostrarPila();
};

// 3) Crear 10 iteraciones diferentes manteniendo el atributo Título
// (generamos 10 variaciones de títulos a partir de los 10 primeros libros o repetimos con sufijos)
const generarIteracionesTitulo = () => {
  if (pilaLibros.length === 0) return console.log("La pila está vacía.");
  console.log("\n🔁 Generando 10 iteraciones conservando título (muestra):");
  const resultado = [];
  for (let i = 0; i < 10; i++) {
    const base = pilaLibros[i % pilaLibros.length];
    const nuevo = { ...base, titulo: `${base.titulo} (Edición iteración #${i + 1})` };
    resultado.push(nuevo);
    console.log(`${i + 1}. ${nuevo.titulo} | Autor: ${nuevo.autor}`);
  }
  console.log("\n✅ 10 iteraciones generadas (no modifican la pila original).");
  return resultado;
};

// 4) Spread operator: agregar 'descuento' 20% al array (sin mutar originales)
const agregarDescuento20 = () => {
  if (pilaLibros.length === 0) return console.log("La pila está vacía.");
  const conDescuento = pilaLibros.map((l) => ({ ...l, descuento: Number((l.precio * 0.2).toFixed(2)) }));
  console.log("\n🏷️ Libros con descuento aplicado (20%) — Título | Autor | Editorial | Precio | Descuento:");
  conDescuento.forEach((l, i) =>
    console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.editorial} | $${l.precio} | Descuento: $${l.descuento}`)
  );
  return conDescuento;
};

// 5) Filter: obtener libros con precio > 50
const filtrarPrecioMayor50 = () => {
  const resultado = pilaLibros.filter((l) => Number(l.precio) > 50);
  if (resultado.length === 0) {
    console.log("🔎 No hay libros con precio mayor a $50.");
    return [];
  }
  console.log("\n🔎 Libros con precio > $50:");
  resultado.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));
  return resultado;
};

// 6) Resumen por número más alto de páginas (top N)
const resumenTopPaginas = (topN = 5) => {
  const copia = [...pilaLibros];
  copia.sort((a, b) => b.paginas - a.paginas);
  const top = copia.slice(0, topN);
  if (top.length === 0) return console.log("No hay libros para mostrar.");
  console.log(`\n📚 Top ${topN} libros por número de páginas:`);
  top.forEach((l, i) =>
    console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.editorial} | ${l.paginas} páginas`)
  );
  return top;
};

// 7) Sort: ordenar por páginas de mayor a menor (devuelve copia)
const ordenarPorPaginasDesc = () => {
  const ordenado = [...pilaLibros].sort((a, b) => b.paginas - a.paginas);
  console.log("\n🔢 Libros ordenados por páginas (mayor -> menor):");
  ordenado.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.paginas} páginas`));
  return ordenado;
};

// 8) Encadenados - varios resúmenes requeridos
const encadenadosResumen = () => {
  console.log("\n🔗 Resúmenes con métodos encadenados:");

  // 1) libros caros por titulo mayores de 11 dolares, resumir por titulo, autor, precio.
  const carosMayores11 = pilaLibros
    .filter((l) => Number(l.precio) > 11)
    .map((l) => ({ titulo: l.titulo, autor: l.autor, precio: l.precio }));
  console.log("\n🟣 Libros caros (precio > $11) — titulo, autor, precio:");
  carosMayores11.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));

  // 2) libros con menos de 100 paginas -> titulo, autor, editorial y paginas
  const menos100 = pilaLibros
    .filter((l) => l.paginas < 100)
    .map((l) => ({ titulo: l.titulo, autor: l.autor, editorial: l.editorial, paginas: l.paginas }));
  console.log("\n🔵 Libros con < 100 páginas — titulo, autor, editorial, paginas:");
  if (menos100.length === 0) console.log("No hay libros con menos de 100 páginas.");
  else menos100.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.editorial} | ${l.paginas}`));

  // 3) libros caros mayores a 20 dolares de mayor a menor resumir por titulo, autor, precio.
  const carosMayores20Ordenados = pilaLibros
    .filter((l) => l.precio > 20)
    .sort((a, b) => b.precio - a.precio)
    .map((l) => ({ titulo: l.titulo, autor: l.autor, precio: l.precio }));
  console.log("\n🟠 Libros caros > $20 (ordenados desc) — titulo, autor, precio:");
  carosMayores20Ordenados.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));

  // 4) resumen de libros por numero mas alto de paginas resumir por titulo, autor, editorial, paginas ordenados mayor a menor.
  const porPaginas = [...pilaLibros]
    .sort((a, b) => b.paginas - a.paginas)
    .map((l) => ({ titulo: l.titulo, autor: l.autor, editorial: l.editorial, paginas: l.paginas }));
  console.log("\n⚫ Resumen general ordenado por páginas (mayor->menor):");
  porPaginas.slice(0, 10).forEach((l, i) =>
    console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.editorial} | ${l.paginas} páginas`)
  );

  return {
    carosMayores11,
    menos100,
    carosMayores20Ordenados,
    porPaginas,
  };
};

// 9) Find - múltiples búsquedas
const buscarPorTitulo = (tituloBuscado) => {
  const encontrado = pilaLibros.find((l) => l.titulo.toLowerCase() === tituloBuscado.toLowerCase());
  if (!encontrado) return console.log(`🔎 No se encontró libro con título exacto: "${tituloBuscado}"`);
  console.log("\n🔎 Resultado de búsqueda por título:");
  console.log(`${encontrado.titulo} | ${encontrado.autor} | ${encontrado.editorial} | $${encontrado.precio}`);
  return encontrado;
};

const buscarPorAutor = (autorBuscado) => {
  const encontrado = pilaLibros.find((l) => l.autor.toLowerCase() === autorBuscado.toLowerCase());
  if (!encontrado) return console.log(`🔎 No se encontró libro del autor: "${autorBuscado}"`);
  console.log("\n🔎 Resultado de búsqueda por autor:");
  console.log(`${encontrado.titulo} | ${encontrado.autor} | ${encontrado.editorial}`);
  return encontrado;
};

const buscarPorFechaPublicacion = (fechaBuscada) => {
  const encontrado = pilaLibros.find((l) => String(l.fecha_publicacion).toLowerCase() === String(fechaBuscada).toLowerCase());
  if (!encontrado) return console.log(`🔎 No se encontró libro con fecha de publicación: "${fechaBuscada}"`);
  console.log("\n🔎 Resultado de búsqueda por fecha de publicación:");
  console.log(`${encontrado.titulo} | ${encontrado.autor} | ${encontrado.fecha_publicacion}`);
  return encontrado;
};

const buscarPorGenero = (generoBuscado) => {
  const encontrado = pilaLibros.find((l) => l.genero.toLowerCase() === generoBuscado.toLowerCase());
  if (!encontrado) return console.log(`🔎 No se encontró libro del género: "${generoBuscado}"`);
  console.log("\n🔎 Resultado de búsqueda por género:");
  console.log(`${encontrado.titulo} | ${encontrado.autor} | ${encontrado.genero}`);
  return encontrado;
};

const buscarPorIdioma = (idiomaBuscado) => {
  const encontrado = pilaLibros.find((l) => l.idioma && l.idioma.toLowerCase() === idiomaBuscado.toLowerCase());
  if (!encontrado) return console.log(`🔎 No se encontró libro en el idioma: "${idiomaBuscado}"`);
  console.log("\n🔎 Resultado de búsqueda por idioma:");
  console.log(`${encontrado.titulo} | ${encontrado.autor} | ${encontrado.idioma}`);
  return encontrado;
};

// 10) Crear 10 iteraciones diferentes de búsqueda (ejecuciones automáticas variadas)
const diezIteracionesBusqueda = () => {
  console.log("\n🔁 Ejecutando 10 iteraciones de búsqueda automática (muestras):");
  const queries = [
    { tipo: "titulo", q: "Dune" },
    { tipo: "titulo", q: "El Hobbit" },
    { tipo: "autor", q: "J.R.R. Tolkien" },
    { tipo: "autor", q: "Dan Brown" },
    { tipo: "fecha", q: "1953" },
    { tipo: "fecha", q: "2007" },
    { tipo: "genero", q: "fantasía" },
    { tipo: "genero", q: "terror" },
    { tipo: "idioma", q: "español" },
    { tipo: "idioma", q: "inglés" },
  ];

  queries.forEach((item, idx) => {
    console.log(`\nIteración ${idx + 1}: tipo=${item.tipo} | q="${item.q}"`);
    switch (item.tipo) {
      case "titulo":
        buscarPorTitulo(item.q);
        break;
      case "autor":
        buscarPorAutor(item.q);
        break;
      case "fecha":
        buscarPorFechaPublicacion(item.q);
        break;
      case "genero":
        buscarPorGenero(item.q);
        break;
      case "idioma":
        buscarPorIdioma(item.q);
        break;
      default:
        console.log("Tipo de búsqueda desconocido.");
    }
  });
};

// 11) Mostrar libros por editorial (máx. 5) - NO modifica pila, solo muestra (versión segura)
const mostrarPorEditorialSeguro = (nombreEditorial) => {
  const librosEditorial = pilaLibros.filter(
    (libro) => libro.editorial && libro.editorial.toLowerCase() === nombreEditorial.toLowerCase()
  );

  if (librosEditorial.length === 0) {
    console.log(`❌ No hay libros de la editorial "${nombreEditorial}".`);
    return;
  }

  const librosMostrar = librosEditorial.slice(0, 5);
  console.log(`\n🏢 Libros de la editorial "${nombreEditorial}" (hasta 5):`);
  librosMostrar.forEach((libro, i) => {
    console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} (${libro.editorial}) - $${libro.precio}`);
  });
  console.log(`\n✅ Total mostrados: ${librosMostrar.length}\n`);
};

// 12) Agregar libro interactivo (push)
const agregarLibroInteractivo = (callback) => {
  const preguntas = [
    ["titulo", "Título: "],
    ["autor", "Autor: "],
    ["genero", "Género: "],
    ["idioma", "Idioma: "],
    ["precio", "Precio (número): "],
    ["formato", "Formato: "],
    ["isbn", "ISBN: "],
    ["descripcion", "Descripción: "],
    ["estado", "Estado: "],
    ["ubicacion", "Ubicación: "],
    ["fecha_publicacion", "Fecha de publicación: "],
    ["editorial", "Editorial: "],
    ["paginas", "Número de páginas: "],
    ["dimensiones", "Dimensiones (ej. 15x22cm): "],
    ["peso", "Peso (ej. 500g): "],
  ];

  const respuestas = {};
  let i = 0;

  const preguntar = () => {
    if (i >= preguntas.length) {
      const libro = crearLibro(
        respuestas.titulo,
        respuestas.autor,
        respuestas.genero,
        respuestas.idioma,
        respuestas.precio,
        respuestas.formato,
        respuestas.isbn,
        respuestas.descripcion,
        respuestas.estado,
        respuestas.ubicacion,
        respuestas.fecha_publicacion,
        respuestas.editorial,
        respuestas.paginas,
        respuestas.dimensiones,
        respuestas.peso
      );
      agregarLibro(libro);
      if (callback) callback();
      return;
    }

    rl.question(preguntas[i][1], (answer) => {
      respuestas[preguntas[i][0]] = answer || "";
      i++;
      preguntar();
    });
  };

  preguntar();
};

// ==========================
// 🖥️ Menú Principal (todo aquí, como pediste)
// ==========================
const mostrarMenu = () => {
  console.log(`
===== 📚 MENÚ PRINCIPAL - system-book =====
1.  Mostrar pila actual
2.  Agregar 1 libro (interactivo)
3.  Agregar 10 libros predefinidos
4.  Quitar 1 libro (pop)
5.  Quitar 5 libros
6.  Mostrar estadísticas
7.  Reinicializar con 30 libros
8.  Listar todos los libros con .map (Título, Autor, Editorial, Precio)
9.  Modificar pila: dejar solo 5 libros de una editorial específica
10. Mostrar libros de una editorial (máx. 5) (no modifica pila)
11. Generar 10 iteraciones manteniendo el atributo Título (muestra)
12. Agregar atributo 'descuento' 20% (spread operator) y listar
13. Filtrar libros con precio > $50
14. Resumen top por páginas (top 5)
15. Ordenar por páginas (mayor -> menor) y mostrar
16. Resúmenes encadenados (varios requerimientos)
17. Obtener libros caros (> $11) resumidos (titulo, autor, precio)
18. Resumen libros < 100 páginas (titulo, autor, editorial, paginas)
19. Resumen libros caros > $20 (ordenados, titulo, autor, precio)
20. Resumen top páginas (titulo, autor, editorial, paginas) ordenado desc
21. Buscar por título
22. Buscar por autor
23. Buscar por fecha de publicación
24. Buscar por género
25. Buscar por idioma
26. Ejecutar 10 iteraciones de búsqueda (automático)
27. Mostrar los 5 libros más caros
28. Mostrar los 5 libros más baratos
29. Reiniciar pila al estado inicial (30 libros)
30. Salir
==========================================
`);
  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        mostrarPila();
        mostrarMenu();
        break;

      case "2":
        agregarLibroInteractivo(() => mostrarMenu());
        break;

      case "3": {
        // Agregar 10 libros predefinidos (mismo bloque que tenías)
        const nuevosLibros = [
          crearLibro("Inferno", "Dan Brown", "ficción", "inglés", 60, "tapa blanda", "ISBN030", "Thriller histórico.", "nuevo", "Estante D1", "2013", "Doubleday", 480, "15x22cm", "700g"),
          crearLibro("La Odisea", "Homero", "historia", "griego", 45, "tapa dura", "ISBN031", "Poema épico clásico.", "nuevo", "Estante D2", "800 a.C.", "Antigua Grecia", 541, "16x23cm", "800g"),
          crearLibro("El nombre del viento", "Patrick Rothfuss", "fantasía", "inglés", 75, "tapa dura", "ISBN032", "Crónica del asesino de reyes.", "nuevo", "Estante D3", "2007", "DAW Books", 662, "15x23cm", "850g"),
          crearLibro("Drácula", "Bram Stoker", "terror", "inglés", 60, "tapa dura", "ISBN033", "Clásico del vampirismo.", "usado", "Estante D4", "1897", "Archibald Constable", 418, "14x22cm", "720g"),
          crearLibro("Fahrenheit 451", "Ray Bradbury", "ciencia ficción", "inglés", 55, "tapa blanda", "ISBN034", "Sociedad sin libros.", "nuevo", "Estante D5", "1953", "Ballantine Books", 256, "14x21cm", "500g"),
          crearLibro("El Principito", "Antoine de Saint-Exupéry", "ficción", "francés", 40, "tapa blanda", "ISBN035", "Fábula filosófica.", "nuevo", "Estante D6", "1943", "Reynal & Hitchcock", 96, "13x20cm", "300g"),
          crearLibro("Moby Dick", "Herman Melville", "ficción", "inglés", 65, "tapa dura", "ISBN036", "Caza del gran cachalote.", "excelente", "Estante D7", "1851", "Harper & Brothers", 635, "15x22cm", "950g"),
          crearLibro("Crimen y castigo", "Fiódor Dostoyevski", "ficción", "ruso", 70, "tapa dura", "ISBN037", "Conflicto moral y psicológico.", "nuevo", "Estante D8", "1866", "The Russian Messenger", 671, "16x23cm", "880g"),
          crearLibro("Los juegos del hambre", "Suzanne Collins", "ficción", "inglés", 55, "tapa blanda", "ISBN038", "Lucha por la supervivencia.", "nuevo", "Estante D9", "2008", "Scholastic Press", 374, "14x21cm", "600g"),
          crearLibro("El código Da Vinci", "Dan Brown", "misterio", "inglés", 70, "tapa blanda", "ISBN039", "Misterio religioso y arte.", "nuevo", "Estante D10", "2003", "Doubleday", 689, "15x23cm", "800g"),
        ];
        nuevosLibros.forEach(agregarLibro);
        console.log("✅ 10 libros agregados a la pila.");
        mostrarMenu();
        break;
      }

      case "4":
        quitarLibro();
        mostrarMenu();
        break;

      case "5":
        quitarNLibros(5);
        mostrarMenu();
        break;

      case "6":
        mostrarEstadisticas();
        mostrarMenu();
        break;

      case "7":
        reinicializarLibros();
        mostrarMenu();
        break;

      case "8":
        listarConMap();
        mostrarMenu();
        break;

      case "9":
        rl.question("Nombre de la editorial para dejar solo 5 libros (modifica la pila): ", (ed) => {
          dejarSoloCincoPorEditorial(ed.trim());
          mostrarMenu();
        });
        break;

      case "10":
        rl.question("Nombre de la editorial a mostrar (no modifica la pila): ", (ed2) => {
          mostrarPorEditorialSeguro(ed2.trim());
          mostrarMenu();
        });
        break;

      case "11":
        generarIteracionesTitulo();
        mostrarMenu();
        break;

      case "12":
        agregarDescuento20();
        mostrarMenu();
        break;

      case "13":
        filtrarPrecioMayor50();
        mostrarMenu();
        break;

      case "14":
        resumenTopPaginas(5);
        mostrarMenu();
        break;

      case "15":
        ordenarPorPaginasDesc();
        mostrarMenu();
        break;

      case "16":
        encadenadosResumen();
        mostrarMenu();
        break;

      case "17": {
        const caros11 = pilaLibros.filter((l) => l.precio > 11).map((l) => ({ titulo: l.titulo, autor: l.autor, precio: l.precio }));
        console.log("\n🟣 Libros caros (precio > $11) — titulo, autor, precio:");
        caros11.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));
        mostrarMenu();
        break;
      }

      case "18":
        {
          const menos100 = pilaLibros
            .filter((l) => l.paginas < 100)
            .map((l) => ({ titulo: l.titulo, autor: l.autor, editorial: l.editorial, paginas: l.paginas }));
          console.log("\n🔵 Libros con < 100 páginas — titulo, autor, editorial, paginas:");
          if (menos100.length === 0) console.log("No hay libros con menos de 100 páginas.");
          else menos100.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | ${l.editorial} | ${l.paginas}`));
          mostrarMenu();
        }
        break;

      case "19":
        {
          const caros20 = pilaLibros
            .filter((l) => l.precio > 20)
            .sort((a, b) => b.precio - a.precio)
            .map((l) => ({ titulo: l.titulo, autor: l.autor, precio: l.precio }));
          console.log("\n🟠 Libros caros > $20 (ordenados desc) — titulo, autor, precio:");
          caros20.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));
          mostrarMenu();
        }
        break;

      case "20":
        resumenTopPaginas(10);
        mostrarMenu();
        break;

      case "21":
        rl.question("Ingrese el título exacto a buscar: ", (tit) => {
          buscarPorTitulo(tit.trim());
          mostrarMenu();
        });
        break;

      case "22":
        rl.question("Ingrese el autor exacto a buscar: ", (aut) => {
          buscarPorAutor(aut.trim());
          mostrarMenu();
        });
        break;

      case "23":
        rl.question("Ingrese la fecha de publicación a buscar (ej. 1997 o 1953): ", (fecha) => {
          buscarPorFechaPublicacion(fecha.trim());
          mostrarMenu();
        });
        break;

      case "24":
        rl.question("Ingrese el género a buscar (ej. fantasía): ", (gen) => {
          buscarPorGenero(gen.trim());
          mostrarMenu();
        });
        break;

      case "25":
        rl.question("Ingrese el idioma a buscar (ej. español): ", (idi) => {
          buscarPorIdioma(idi.trim());
          mostrarMenu();
        });
        break;

      case "26":
        diezIteracionesBusqueda();
        mostrarMenu();
        break;

      case "27": {
        const topCaros = [...pilaLibros].sort((a, b) => b.precio - a.precio).slice(0, 5);
        console.log("\n💰 Top 5 libros más caros:");
        topCaros.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));
        mostrarMenu();
        break;
      }

      case "28": {
        const topBaratos = [...pilaLibros].sort((a, b) => a.precio - b.precio).slice(0, 5);
        console.log("\n🏷️ Top 5 libros más baratos:");
        topBaratos.forEach((l, i) => console.log(`${i + 1}. ${l.titulo} | ${l.autor} | $${l.precio}`));
        mostrarMenu();
        break;
      }

      case "29":
        reinicializarLibros();
        mostrarMenu();
        break;

      case "30":
        console.log("👋 Saliendo del sistema...");
        rl.close();
        break;

      default:
        console.log("⚠️ Opción no válida.");
        mostrarMenu();
        break;
    }
  });
};

// ==========================
// 🚀 Inicio del Programa
// ==========================
function iniciarMenu() {
  reinicializarLibros(); // carga 30 libros
  mostrarEstadisticas();
  mostrarMenu();
}
iniciarMenu();