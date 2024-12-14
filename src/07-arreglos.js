const products = ["mesa", "silla", "sillon", "cama"];
products.push("almohada");
console.log(products);

products.forEach(console.log);

for (const p of products) {
  console.log(p);
}
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}
