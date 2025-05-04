


export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'pedro';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );