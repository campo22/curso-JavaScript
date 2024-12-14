const user = {
  name: "Juan",
  lastname: "Perez",
  age: 20,
  address: {
    city: "Bogota",
    zip: 110011,
    lat: 14.664717,
    lng: -90.511183,
  },
};

// const {
//   name,
//   age,
//   address: { city },
// } = user;

const detail = (user) => {
  const {
    name,
    age,
    address: { city },
  } = user;
  console.log(
    `el nombre es ${name} con la edad de  ${age} y la ciudad es ${city}`
  );
};
console.log(detail(user));
