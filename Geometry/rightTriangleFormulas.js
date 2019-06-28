// a - cathetus , с - hypotenuse
export function findСathetus(a, c) {
  let cathetus = Math.sqrt(c * c - a * a);
  return cathetus;
}

// a - cathetus, b - cathetus

export function findHypotenuse(a, b) {
  let hypotenuse = Math.sqrt(a * a + b * b);
  return hypotenuse;
}