// ==========================
// 📚 Sistema de Gestión de Libros
// ==========================
const readline = require('readline');

// ==========================
// 🔸 Variables Globales
// ==========================
let pilaLibros = []; // Pila principal de libros (LIFO)
const generosValidos = ["ficción", "no ficción", "ciencia ficción", "fantasía", "misterio", "romance", "historia", "biografía", "autoayuda", "técnico"];
const formatosValidos = ["tapa dura", "tapa blanda", "ebook", "audiolibro", "digital"];
const estadosValidos = ["nuevo", "usado", "como nuevo", "excelente", "bueno"];
const idiomasValidos = ["español", "inglés", "francés", "alemán", "italiano", "portugués"];


// ==========================
// 🧱 Función Constructora de Libro (Objeto Literal)
// ==========================
const crearLibro = (
titulo, autor, genero, idioma, precio, formato, isbn,
descripcion, estado, ubicacion, fecha_publicacion, editorial,
paginas, dimensiones, peso
) => ({
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
peso,
fecha_agregado: new Date().toLocaleString()
});

// ==========================
// 🧮 Operaciones de la Pila
// ==========================

// ➕ Agregar libro
const agregarLibro = (libro) => pilaLibros.push(libro);

// ➖ Quitar libro (LIFO)
const quitarLibro = () => {
if (pilaLibros.length === 0) return console.log("⚠️ No hay libros en la pila.");
const eliminado = pilaLibros.pop();
console.log(`🗑️ Libro eliminado: ${eliminado.titulo}`);
};

// 📋 Mostrar pila
const mostrarPila = () => {
console.log("\n📚 LISTA ACTUAL DE LIBROS:");
if (pilaLibros.length === 0) return console.log("La pila está vacía.");
pilaLibros.forEach((libro, i) => {
console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} (${libro.genero})`);
});
console.log(`\nTotal: ${pilaLibros.length} libros\n`);
};

const mostrarEstadisticas = () => {
  const total = pilaLibros.length;
  const precioTotal = pilaLibros.reduce((acc, l) => acc + l.precio, 0);
  const promedio = total ? (precioTotal / total).toFixed(2) : 0;

  console.log("\n📈 ESTADÍSTICAS DE LA COLECCIÓN:");
  console.log(`Total de libros: ${total}`);
  console.log(`Precio total: $${precioTotal}`);
  console.log(`Precio promedio: $${promedio}`);

  const distribucion = {};
  pilaLibros.forEach((l) => distribucion[l.genero] = (distribucion[l.genero] || 0) + 1);
  console.log("\n📚 Distribución por género:");
  Object.entries(distribucion).forEach(([g, c]) => console.log(`- ${g}: ${c}`));
}; // ✅ Aquí cierra mostrarEstadisticas correctamente


// ==========================
// 🏢 Mostrar libros por editorial (usando Array Methods)
// ==========================
const mostrarPorEditorial = (nombreEditorial) => {
  const librosEditorial = pilaLibros.filter(
    (libro) => libro.editorial.toLowerCase() === nombreEditorial.toLowerCase()
  );

  if (librosEditorial.length === 0) {
    console.log(`❌ No hay libros de la editorial "${nombreEditorial}".`);
  } else {
    console.log(`\n🏢 Libros de la editorial "${nombreEditorial}":`);
    librosEditorial.forEach((libro, i) => {
      console.log(`${i + 1}. ${libro.titulo} - ${libro.autor} (${libro.editorial})`);
    });
    console.log(`\nTotal encontrados: ${librosEditorial.length}`);
  }
};



// 🔄 Reinicializar colección
const reinicializarLibros = () => {
pilaLibros = librosIniciales();
console.log("🔁 Colección reiniciada con 20 libros.");
};

// ==========================
// 📘 Colección Inicial de Libros
// ==========================
const librosIniciales = () => [
 // 📚 Clásicos de la Literatura
crearLibro("El Señor de los Anillos: La Comunidad del Anillo", "J.R.R. Tolkien", "fantasía", "inglés", 80, "tapa dura", "ISBN001", "Primera parte de la trilogía épica.", "nuevo", "Estante A1", "1954", "Allen & Unwin", 423, "15x22cm", "800g"),
crearLibro("1984", "George Orwell", "ficción", "inglés", 50, "tapa blanda", "ISBN002", "Distopía política y social.", "usado", "Estante A2", "1949", "Secker & Warburg", 328, "14x21cm", "500g"),
crearLibro("Cien años de soledad", "Gabriel García Márquez", "ficción", "español", 60, "tapa dura", "ISBN003", "Realismo mágico en Macondo.", "como nuevo", "Estante B1", "1967", "Sudamericana", 471, "15x22cm", "700g"),
crearLibro("Don Quijote de la Mancha", "Miguel de Cervantes", "ficción", "español", 90, "tapa dura", "ISBN004", "Clásico de la literatura universal.", "excelente", "Estante B2", "1605", "Francisco de Robles", 863, "17x24cm", "1kg"),
crearLibro("Los miserables", "Victor Hugo", "ficción", "francés", 70, "ebook", "ISBN005", "Obra monumental sobre la justicia y la redención.", "nuevo", "Digital", "1862", "A. Lacroix", 1463, "Digital", "0g"),
crearLibro("Harry Potter y la piedra filosofal", "J.K. Rowling", "fantasía", "inglés", 55, "tapa dura", "ISBN006", "Inicio de la saga del joven mago.", "nuevo", "Estante C1", "1997", "Bloomsbury", 309, "14x21cm", "600g"),
crearLibro("El Hobbit", "J.R.R. Tolkien", "fantasía", "inglés", 65, "tapa blanda", "ISBN007", "Aventura previa a El Señor de los Anillos.", "como nuevo", "Estante C2", "1937", "Allen & Unwin", 310, "15x22cm", "550g"),
crearLibro("El nombre del viento", "Patrick Rothfuss", "fantasía", "inglés", 75, "tapa dura", "ISBN008", "Historia de Kvothe, un héroe legendario.", "nuevo", "Estante C3", "2007", "DAW Books", 662, "16x23cm", "950g"),
crearLibro("Los juegos del hambre", "Suzanne Collins", "ciencia ficción", "inglés", 50, "tapa blanda", "ISBN009", "Competencia mortal en una sociedad distópica.", "usado", "Estante C4", "2008", "Scholastic Press", 374, "14x21cm", "480g"),
crearLibro("Fahrenheit 451", "Ray Bradbury", "ciencia ficción", "inglés", 45, "ebook", "ISBN010", "Mundo donde los libros están prohibidos.", "nuevo", "Digital", "1953", "Ballantine Books", 256, "Digital", "0g"),
crearLibro("Crónica de una muerte anunciada", "Gabriel García Márquez", "ficción", "español", 45, "tapa blanda", "ISBN015", "Historia de un asesinato anunciado en un pequeño pueblo.", "usado", "Estante D5", "1981", "Oveja Negra", 122, "14x20cm", "300g"),
crearLibro("Dune", "Frank Herbert", "ciencia ficción", "inglés", 85, "tapa dura", "ISBN016", "Saga épica sobre poder, religión y ecología en el planeta Arrakis.", "nuevo", "Estante E1", "1965", "Chilton Books", 688, "16x23cm", "900g"),
crearLibro("It", "Stephen King", "terror", "inglés", 75, "tapa blanda", "ISBN017", "Un grupo de amigos enfrenta a una entidad maligna en Derry.", "como nuevo", "Estante E2", "1986", "Viking Press", 1138, "15x23cm", "950g"),
crearLibro("Orgullo y prejuicio", "Jane Austen", "romance", "inglés", 50, "tapa dura", "ISBN018", "Historia clásica de amor y clase social en la Inglaterra del siglo XIX.", "nuevo", "Estante F1", "1813", "T. Egerton", 432, "15x22cm", "700g"),
crearLibro("La metamorfosis", "Franz Kafka", "ficción", "alemán", 40, "ebook", "ISBN019", "Gregor Samsa despierta convertido en un insecto gigante.", "nuevo", "Digital", "1915", "Kurt Wolff Verlag", 102, "Digital", "0g"),
crearLibro("Asesinato en el Orient Express", "Agatha Christie", "misterio", "inglés", 55, "tapa blanda", "ISBN020", "Hércules Poirot resuelve un crimen en un tren atrapado por la nieve.", "excelente", "Estante F2", "1934", "Collins Crime Club", 256, "14x21cm", "480g"),
crearLibro("El código Da Vinci", "Dan Brown", "ficción", "inglés", 60, "tapa blanda", "ISBN011", "Thriller de misterio y simbología.", "como nuevo", "Estante D1", "2003", "Doubleday", 489, "15x22cm", "720g"),
crearLibro("La sombra del viento", "Carlos Ruiz Zafón", "ficción", "español", 65, "tapa dura", "ISBN012", "Intriga y amor en la Barcelona de posguerra.", "excelente", "Estante D2", "2001", "Planeta", 565, "15x23cm", "800g"),
crearLibro("El alquimista", "Paulo Coelho", "ficción", "portugués", 50, "tapa blanda", "ISBN013", "Viaje espiritual en busca del destino.", "nuevo", "Estante D3", "1988", "Rocco", 208, "14x20cm", "350g"),
crearLibro("El retrato de Dorian Gray", "Oscar Wilde", "ficción", "inglés", 55, "tapa dura", "ISBN014", "Retrato de la vanidad y el alma humana.", "usado", "Estante D4", "1890", "Lippincott’s Monthly Magazine", 254, "15x22cm", "600g"),

];

// ==========================
// 🖥️ Menú Interactivo
// ==========================
const iniciarMenu = () => {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
===== 📚 MENÚ DEL SISTEMA =====
1. Mostrar pila actual
2. Agregar 10 libros
3. Quitar 5 libros
4. Mostrar estadísticas
5. Reinicializar con 20 libros
7. Mostrar libros de una editorial
6. Salir
==============================
`);
rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
        case "1":
        mostrarPila();
        break;
        case "2":
        const nuevosLibros = [
crearLibro("Dune", "Frank Herbert", "ciencia ficción", "inglés", 80, "tapa dura", "ISBN015", "Batalla política y ecológica en Arrakis.", "nuevo", "Estante E1", "1965", "Chilton Books", 688, "16x24cm", "950g"),
crearLibro("Neuromante", "William Gibson", "ciencia ficción", "inglés", 60, "tapa blanda", "ISBN016", "Inicio del género cyberpunk.", "bueno", "Estante E2", "1984", "Ace Books", 271, "14x21cm", "450g"),
crearLibro("El perfume", "Patrick Süskind", "ficción", "alemán", 55, "tapa blanda", "ISBN017", "Historia de un asesino obsesionado con los olores.", "excelente", "Estante E3", "1985", "Diogenes Verlag", 263, "14x21cm", "500g"),
crearLibro("El club de la lucha", "Chuck Palahniuk", "ficción", "inglés", 50, "tapa blanda", "ISBN018", "Crítica social y existencialismo moderno.", "usado", "Estante E4", "1996", "W. W. Norton", 218, "14x21cm", "400g"),
crearLibro("American Gods", "Neil Gaiman", "fantasía", "inglés", 75, "tapa dura", "ISBN019", "Choque entre dioses antiguos y modernos.", "nuevo", "Estante E5", "2001", "William Morrow", 465, "16x23cm", "850g"),
crearLibro("El libro de arena", "Jorge Luis Borges", "ficción", "español", 40, "tapa blanda", "ISBN020", "Colección de relatos metafísicos.", "bueno", "Estante F1", "1975", "Emecé", 181, "13x20cm", "300g"),
crearLibro("Pedro Páramo", "Juan Rulfo", "ficción", "español", 45, "tapa blanda", "ISBN021", "Novela del realismo mágico mexicano.", "como nuevo", "Estante F2", "1955", "Fondo de Cultura Económica", 124, "13x20cm", "250g"),
crearLibro("Rayuela", "Julio Cortázar", "ficción", "español", 65, "tapa dura", "ISBN022", "Novela experimental e innovadora.", "excelente", "Estante F3", "1963", "Sudamericana", 736, "15x23cm", "900g"),
crearLibro("La casa de los espíritus", "Isabel Allende", "ficción", "español", 60, "tapa dura", "ISBN023", "Saga familiar con toques mágicos.", "nuevo", "Estante F4", "1982", "Plaza & Janés", 490, "15x22cm", "750g"),
crearLibro("Los detectives salvajes", "Roberto Bolaño", "ficción", "español", 70, "tapa dura", "ISBN024", "Viaje literario por la poesía y la juventud.", "nuevo", "Estante F5", "1998", "Anagrama", 609, "16x23cm", "880g")
];
nuevosLibros.forEach(agregarLibro);
console.log("✅ 10 libros agregados a la pila.");
        break;
        case "3":
        for (let i = 0; i < 5; i++) quitarLibro();
        break;
        case "4":
        mostrarEstadisticas();
        break;
        case "5":
        reinicializarLibros();
        break;
        case "6":
        console.log("👋 Saliendo del sistema...");
        rl.close();
        return;
        default:
        console.log("⚠️ Opción no válida.");
        case "7":
    rl.question("Ingrese el nombre de la editorial que desea consultar: ", (nombre) => {
    mostrarPorEditorial(nombre);
    mostrarMenu(); // vuelve al menú principal
});
return;
    }
mostrarMenu();
    });
};

reinicializarLibros();
mostrarEstadisticas();
mostrarMenu();
};

// ==========================
// 🚀 Inicio del Programa
// ==========================
iniciarMenu();

// const pilaLibros = [...librosIniciales(), ...nuevosLibros()].filter(libro => libro.editorial === "Sudamericana");
// console.log(librosEditorial);

// const librosEditorial = librosIniciales().filter(function(libro) {
// return libro.editorial === "Sudamericana";
// });
// console.log(librosEditorial);