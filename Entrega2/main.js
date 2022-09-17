const input = document.getElementById("input");
const h2 = document.getElementById("carta");
const h4 = document.getElementById("descripcion");
const btn = document.getElementById("btn");


class pizza {
    constructor(ID, nombre, ingredientes, precio) {
        this.ID = ID
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }

}

let pizzas = [margarito = new pizza(`1`, `Margarito`, ingredientes = [`salsa`, `muzza`, `oregano`], 1630),
    prosciutto = new pizza(`2`, `Procciutto`, ingredientes = [`salsa`, `muzza`, `jamon`, `morron`], 1840),
    napoletana = new pizza(`3`, `Napoletana`, ingredientes = [`salsa`, `muzza`, `toamte`, `ajo`], 2090),
    cipolla = new pizza(`4`, `Cipolla`, ingredientes = [`salsa`, `muzza`, `cebolla`, `oregano`], 1450),
    funghi = new pizza(`5`, `Funghi`, ingredientes = [`salsa`, `muzza`, `hongos`, `roquefort`], 1970),
    pepperoni = new pizza(`6`, `Pepperoni`, ingredientes = [`salsa`,`muzza`, `pepperoni`], 1930),
]


const saveLocalStorage = (pizzas) => {
    localStorage.setItem('pizzas2', JSON.stringify(pizzas))
};
saveLocalStorage(pizzas)

let getPizzas = JSON.parse(localStorage.getItem('pizzas2'));


btn.addEventListener('click', button)


function filtro(inputID) {
    const laPizza = pizzas.filter((piza) => piza.ID == inputID)
    for (piza of laPizza) {
        h2.innerHTML = `${piza.nombre}`;
        h4.innerHTML = `${piza.precio}`;
    }
}

function error() {

    h2.innerHTML = `Seleccione las opciones disponibles`;
    h4.innerHTML = ``;

}

function button(e) {
    e.preventDefault();
    var inputID = input.value.trim();
    inputID <= pizzas.length && inputID > 0 ? filtro(inputID) : error();
}