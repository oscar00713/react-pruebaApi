
export const getGifs = async (category) => {
const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Hk2bTMhMGAY8GoRE6e35cKiaTG9sLAB4`;
const resp = await fetch(url);
const {data} = await resp.json();
const git = data.map(img =>{
return {
   id:img.id,
   title:img.title,
   url:img.images?.downsized_medium.url

}

})

 return git;

}