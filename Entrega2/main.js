// constructor
class pizza {
    constructor(id, nombre, ingredientes, precio){  
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
};
//arrat
const Pizzas = [
    new pizza(1, 'Margarito', ['salsa','muzza','oregano'],'1630'),
    new pizza(2, 'Prosciutto', ['salsa','muzza','jamon','morron'],'1840'),
    new pizza(3, 'Napoletana', ['salsa','muzza','tomate','ajo'],'2090'),
    new pizza(4, 'Cipolla', ['salsa','muzza','cebolla','oregano'],'1450'),
    new pizza(5, 'Funghi', ['salsa', 'muzza','hongos','roquefort'],'1970'),
    new pizza(6, 'Pepperoni', ['salsa','muzza', 'pepperoni'],'1930')
];
//variables
const h2 = document.getElementById("h2");
const h4 = document.getElementById("h4");
const inputNumber = document.getElementById("number");
const button = document.getElementById("press-button");
//render
const showPizza = () => {
    const valor = inputNumber.value.trim();
    const pizza = Pizzas.filter((e) => e.id == valor);

    const nombre = pizza.map((e) => e.nombre);
    const precio = pizza.map((e) => e.precio);

    if(!valor.length) {
        alert("Elija una opcción");
        return
    } else if (!pizza.length) {
        showError(inputNumber,"Seleccione entre las opciones disponibles del menu");
        inputNumber.value = "";
        renderPizza(nombre,precio);
        return
    } else {
        showSuccess(inputNumber);
    };

    inputNumber.value = "";
    renderPizza(nombre,precio);
};

const showError = (input,message) => {
    const pizzasContainer = input.parentElement;
    const error = pizzasContainer.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    const pizzasContainer = input.parentElement;
    const error = pizzasContainer.querySelector("small");
    error.textContent = "";
}

const renderPizza = (titulo,precio) => {
    if(titulo.length && precio.length) {
        h2.innerHTML = `${titulo}`;
        h4.innerHTML = `$${precio}`;
    } else {
        h2.innerHTML = "";
        h4.innerHTML = "";
    }; 
};

const init = () => {
    button.addEventListener("click", showPizza);
};

init();