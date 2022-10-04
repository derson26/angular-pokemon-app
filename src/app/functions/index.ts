 // Leading Zero
 export function leadingZero(str?: string | number , size:number = 3) {
  let num = String(str);
  while (num.length < size) num = "0" + num;
  return num;
}

export function getUrl( id: string ){
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
}
