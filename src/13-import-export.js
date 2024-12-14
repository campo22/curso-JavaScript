import invoiceByClientName, { invoice, product1 } from "./data/invoice.js";

const invoice2 = invoice.map((i) => {
  return i.items.map((i) => {
    return i.product.name;
  });
});
console.log(invoice2);
const invoiceById = invoice.find((i) => i.id === 10);
console.log(invoiceById);

const invoiceByClient = invoice.filter((i) => i.client.id === 2);
console.log(invoiceByClient);

const invoiceFilter = invoice.filter((i) => i.items.includes(product1));
console.log(invoiceFilter);

console.log(invoiceByClientName("Diver"));
