const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 10,
  },

  items: [
    {
      product: {
        id: 1,
        name: "Keyboard",
        price: 200,
      },
      quantity: 2,
    },
    {
      product: {
        id: 2,
        name: "Mouse",
        price: 100,
      },
      quantity: 4,
    },
    {
      product: {
        id: 3,
        name: "Monitor",
        price: 500,
      },
      quantity: 1,
    },
  ],
  tolal: function () {
    let total = 0;
    this.items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  },
};
const invoice2 = { ...invoice };
const result = invoice == invoice2;
if (result) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}
invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);
