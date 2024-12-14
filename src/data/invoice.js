const product1 = {
  id: 3,
  name: "Monitor",
  price: 500,
};

const invoice = [
  {
    id: 10,
    name: "Compras de oficina",
    date: new Date(),
    client: {
      id: 2,
      name: "Diver",
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
          product1,
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
          product1,
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
          product1,
        },
        quantity: 1,
      },
    ],
  },
];

const invoiceByClientName = (clientName) => {
  return invoice.filter((i) => i.client.name === clientName);
};

const invoiceById = (id) => {
  return invoice.find((i) => i.id === id);
};
const faidInvoiceById = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const resul = invoiceById(11);
      if (resul) {
        resolve(resul);
      } else {
        reject("no se encontro la factura");
      }
    }, 3000);
  });
  return promise;
};

export {
  invoice,
  product1,
  invoiceByClientName as default,
  invoiceById,
  faidInvoiceById,
};
