/* ¡Volvemos a trabajar con nuestro array de Pizzas🍕 !:

Deberán realizar el siguiente desafio: 

👉 A cada Pizza, agregarle una imagen. 
👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
👉 Debajo del card tiene que haber un input y un botón. 

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

¿Cuál es el desafío final?
Deberán guardar en localStorage la última pizza buscada y renderizada, y al recargar la página será esa pizza la que se deberá mostrar en la página.


🆙 Entregar el link de Github , en el cual debe estar linkeado el deploy del Vercel de su aplicación
(mediante Github nosotros deberíamos poder ver el Vercel vinculado a su repositorio). */

// array

const Pizzas = [
    {id:1,productname: 'Margarito',ingredients: ['Salsa de tomate','Mozzarella','Oregano','Aceitunas'],price: '1630', pic:"./pics/pizzamargarito.png"},
    {id:2,productname: 'Prosciutto',ingredients: ['Salsa de tomate','Mozzarella','Jamon Cocido','Morrones'],price: '1840', pic:"./pics/pizzaprosciutto.png"},
    {id:3,productname: 'Napoletana',ingredients: ['Salsa de tomate','Mozzarella','Rodajas de tomate','Ajo'],price: '2090', pic:"./pics/pizzanapoletana.png"},
    {id:4,productname: 'Cipolla',ingredients: ['Salsa de tomate','Mozzarella','Cebolla','Oregano'],price: '1450', pic:"pics/pizzafugazza.png"},
    {id:5,productname: 'Funghi',ingredients: ['Salsa de tomate','Mozzarella','Champignones','Roquefort'],price: '1970', pic:"./pics/pizzafunghi.png"},
    {id:6,productname: 'Pepperoni',ingredients: ['Salsa de tomate','Mozzarella', 'Pepperoni', 'Aji molido'],price: '1930', pic:"./pics/pizzapepper.png"}
];

//query selector
const cardCont = document.querySelector(".card-pizzas");
const boton = document.querySelector(".press-button");
let small = document.querySelector(".small");

//render

const renderPizzeria = (pizza, value, input = document.querySelector(".input-box")) =>{
    input.classList.remove("alert");
    small.innerText = "";
    input.value = "";

    saveLocalStorage(value);

    const {id,productname,ingredients,price,pic} = pizza[0];

    return `
        <img src=${pic}></img>
        <h3>Pizza ${productname}</h3>
        <p>Ingredientes: ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]} y ${ingredients[3]} </p>
        <p1>Precio: $${price}</p1>
    `
}

//save
const saveLocalStorage = (value) => {
    localStorage.setItem("pizza", JSON.stringify(value));
}

//show alert

const renderAlert = (input, msg) => {
    input.value = "";

    input.classList.add("alert");

    small.innerText = msg
}


// events
boton.addEventListener("click", (e) =>{
    e.preventDefault();

    let input = document.querySelector(".input-box");
    let inpValue = Number(input.value);

    let objPizza = Pizzas.filter(pizza => pizza.id === inpValue);

    if(objPizza.length === 0 && inpValue !== 0){
        renderAlert(input,"Seleccione entre las opciones disponibles");
    } else if(objPizza.length === 0 && inpValue === 0){
        renderAlert(input,"Elija una opcción");
    } else {
        cardCont.innerHTML = renderPizzeria(objPizza,inpValue,input);
    }
})

//traer del LS
document.addEventListener("DOMContentLoaded", () =>{
    let local = JSON.parse(localStorage.getItem("pizza")) || "1";
    let valueStorage = Number(local);

    let objPizza = Pizzas.filter(pizza => pizza.id === valueStorage);

    cardCont.innerHTML = renderPizzeria(objPizza,valueStorage);
})