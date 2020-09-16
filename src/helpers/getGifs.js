

export const getGifs = async( category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=or6ejG0C5F4wU1DVaEgGNv8OmlHX41KR`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map(img =>{
        return {
            id:img.id,
            title: img.title,
            url:img.images?.downsized_medium.url  //Se escribe  ? para saber si existen las imagenes
        }
    })

    return gifs;
}