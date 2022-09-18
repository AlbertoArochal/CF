/* const funcion1 = () => {console.log('primera funcion')}
const funcion2 = () => {setTimeout(() => {console.log('segunda funcion')}, 1000)}
const funcion3 = () => {console.log('tercera funcion')}

funcion1()
funcion2()
funcion3() */

const confirmed = true;

const askDelivery = new Promise((resolve, reject) => {
    if (confirmed) { resolve("esito!") } 
    else { reject('fricase') }

})

console.log(askDelivery)
askDelivery
    .then((value) => console.log(value))
    .catch((error) => console.log(error))
    .finally(() => console.log('finished'))