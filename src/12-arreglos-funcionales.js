const invoice = [
  {
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
  },
  {
    id: 11,
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
          name: " pantalla",
          price: 200,
        },
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: "cell",
          price: 100,
        },
        quantity: 4,
      },
      {
        product: {
          id: 3,
          name: "play",
          price: 500,
        },
        quantity: 1,
      },
    ],
  },
  {
    id: 12,
    name: "Compras telefonica",
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
          name: "iphone12",
          price: 200,
        },
        quantity: 2,
      },
      {
        product: {
          id: 2,
          name: "samsung",
          price: 100,
        },
        quantity: 4,
      },
      {
        product: {
          id: 3,
          name: "iphone13",
          price: 500,
        },
        quantity: 1,
      },
    ],
  },
];
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
