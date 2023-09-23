const fechaActual = new Date();


const month = fechaActual.getMonth();
const monthsOfYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const monthName = monthsOfYear[month];

const date = fechaActual.getDate();
const year = fechaActual.getFullYear();

let fecha = document.querySelector('.date');
fecha.innerHTML = `${date} de ${monthName} de ${year}`;
