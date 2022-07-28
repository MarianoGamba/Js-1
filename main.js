const productos = [
    {
        id: 1,
        nombre: "Grande de muzzarella",
        precio:900,
        ingredientes: ["muzzarella"]
    },
    
    {
        id: 2,
        nombre: "Pizza con peperoni",
        precio:1500,
        ingredientes:["muzzarella", "peperoni"]
    },
    
    {
        id: 3,
        nombre: "Pizza con jamon",
        precio : 1500,
        ingredientes: ["muzzarella", "jamon"]
      
    },
    
    {
        id: 4, 
        nombre: "Pizza fugazzeta",
        precio: 1850,
        ingredientes: ["muzzarella", "cebolla"]
    },
    
    {
        id: 5, 
        nombre:"Pizza a la cancha",
        precio: 700,
        ingredientes: ["ajo", "condimentos"]
    },
    
    {
        id: 6, 
        nombre: "Pizza con morron",
        precio: 2200,
        ingredientes: ["muzzarella", "morron"]
    },
    
];

// /* nombre de cada pizza y su precio */
const ImprimirNombreYPrecio = () => productos.forEach((producto) => console.log("La ${producto.nombre} sale $${producto.precio}"))

 ImprimirNombreYPrecio ()



// /*menor precio de 600*/
// const menoresA = () => {
//     if (productos.some((producto) => producto.precio.length <= 600)){
//         return "obvio rey que hay pizzas a menos de 600 pe"
//     } else {
//         return "No rey no hay pizzas por menos de 600pe"
//     }
// }
//  console.log (menoresA())



// /* nombre de cada pizza */
// const ImprimirNombre = () => productos.forEach((producto) => console.log(producto.nombre))
// ImprimirNombre ()


// /*precio de cada pizza*/
// /* nombre de cada pizza y su precio */
// const ImprimirPrecio = () => productos.forEach((producto) => console.log(producto.precio))
// ImprimirPrecio ()


