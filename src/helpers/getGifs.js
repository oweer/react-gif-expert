export const getGift = async( category )=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=NW5LaOxHnnhGt1g5IKuLHv655Bouxl1Y&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();

    const gifts = data.map( img => ({
        id: img.id,
        title : img.title,
        url: img.images.downsized_medium.url
    }))

    return gifts;

}