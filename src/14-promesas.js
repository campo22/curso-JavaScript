import { faidInvoiceById } from "./data/invoice.js";

faidInvoiceById(10)
  .then((res) => {
    console.log(res);
    console.log("realizando promesa con exito");
  })
  .catch(console.error);
