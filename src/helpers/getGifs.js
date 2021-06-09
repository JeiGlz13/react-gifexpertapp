export const getGifs = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FCJejsFZs7SvkGr3b3Mp8cQOr44kEy9Z&limit=10&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
       return  {id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url}
    })

    return gifs;
}