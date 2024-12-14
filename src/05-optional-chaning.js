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
console.log(invoice.tolal().name?.nam);
console.log(invoice?.date);
if (invoice.company?.name) {
  console.log("existe");
} else {
  console.log("no existe");
}

console.log(invoice.company?.name);
