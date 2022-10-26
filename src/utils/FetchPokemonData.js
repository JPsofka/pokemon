export const FetchPokemonData = (API,name) =>{
    fetch(`${API}/${name}`)
    .then(response => response.json())
    .then(data => console.log(data))
} 