const products = ["mesa", "silla", "sillon", "cama"];
products.push("arroz");

const fruits = ["manzana", "pera", "banana"];

const mercado = [...products, ...fruits];
console.log(mercado);
