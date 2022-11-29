//¿Como voy a aplicar mi bucle? ---> Segun la cantidad de personas puedo realizar un console.log que diga "Usuario X debe X CANTIDAD de dinero"
//¿Como voy a aplicar mi estructura condicional? ---> Sistema de puntos para "recompensas" p.e cada tantos pesos gastados, obtenes tantos puntos que equivalen a un reintegro/descuento en futuras compras.
//¿Como voy a aplicar mi función? ---> Una funcion que sume los gastos y los divida por la cantidad de personas que son y retorne cuanto dinero debe cada usuario.

let cantidadPersonas = prompt("Ingrese la cantidad de personas entre las cuales se dividira el gasto.")
let cantidadDinero = prompt("Ingrese el monto total.")

function divisorGastos(cantidadPersonas, cantidadDinero) {
    return cantidadDinero / cantidadPersonas
}

for (let i = 1; i <= cantidadPersonas; i++) {
    console.log(`Usuario ${i} debe $${divisorGastos(cantidadPersonas, cantidadDinero)}`)
}

if (divisorGastos(cantidadPersonas, cantidadDinero) > 0 && (divisorGastos(cantidadPersonas, cantidadDinero)) <= 500) { 
    console.log(`Sumaste 100 puntos. Seguí sumando y obtené grandes beneficios.`) 
}
else if (divisorGastos(cantidadPersonas, cantidadDinero) > 500 && (divisorGastos(cantidadPersonas, cantidadDinero)) <= 1000) {
    console.log(`Sumaste 500 puntos. Seguí sumando y obtené grandes beneficios.`) 
}
else if (divisorGastos(cantidadPersonas, cantidadDinero) > 1000 && (divisorGastos(cantidadPersonas, cantidadDinero)) <= 1500) { 
    console.log(`Sumaste 1000 puntos. Seguí sumando y obtené grandes beneficios.`) 
}
else { 
    console.log(`Sumaste 1500 puntos. Seguí sumando y obtené grandes beneficios.`) 
}
// VINCULAR TAILWIND CLI