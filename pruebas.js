
const vec = [3, 4, 7, 9, 1, 29, 94, 75];

let [x, y, z, ...k] = vec;
// ...k esta parte guarda todo el resto del array en esa variable
// ...k [parametro rest]

console.log(x, y, z, k); // salida: 3 4 7 [9, 1, 29, 94, 75]