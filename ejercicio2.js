// 2.Mostrar por consola los primeros 10 números pares.

let res;


let mostrar=(num) => {
    let suma=0;
    for(let i=2; i<=num;i=i+2){
        console.log("El número par es: "+ i);
        suma=suma+i;
    }
    return suma;
}

res=mostrar(10);
console.log("La suma de los primeros 10 números pares es: "+ res);

//function nom_func(Variables_de_entrada){
    // Cuerpo de la función
    // return Variables_de_salida;
//}

// nom_func(i,a)

// for (i=2;i<=20;i=i+2){
//     console.log("El número par es: "+ i);
// }