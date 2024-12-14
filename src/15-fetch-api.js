const httpCliente = fetch("https://jsonplaceholder.typicode.com/users");

// httpCliente.then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

httpCliente.then((response) => response.json()).then(console.log);
