//Función organizar arreglo
const arreglo = [{id: 2}, {id: 4}, {id: 23}, {id: 21}, {id: 34}, {id: 0}, {id: -4}, {id: 59}, {id: 10}, {id: 14}, {id: 14}, {id: 52}, {id: 39}, {id: 5}, {id: 6}, {id: 0}, {id: 27}, {id: 45}, {id: 67}, {id: 100}];
arreglo.sort(function(a, b ) {return a.id - b.id; });
console.log(arreglo)

// Función identificación palíndromo

function palabra(a) {
    let array = Array.from(a)
    let newArray = []
    for (let i = 0 ; i < array.length; i++){
        newArray.unshift(array[i])
    }
    console.log(a.toLowerCase() === newArray.join('').toLocaleLowerCase() ? 'Es un palíndromo' : 'No es un palíndromo')
}
palabra('Oso')

// Escriba una función saludo que al ser llamada de la siguiente forma: saludo('‘'Hola’)(‘Mundo’) imprima el texto ‘Hola Mundo’

function saludo (a){
    function saludo2 (b){
        return (`${a} ${b}`)
    }
    return saludo2

}

console.log(saludo('Hola')('Mundo'))



// federico.romero@imagineapps.co
