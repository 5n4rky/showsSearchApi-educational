const search = document.querySelector('#searchBox');
const btn  = document.querySelector('button');
const baseUrl = "https://api.tvmaze.com/search/shows?q=";
const div = document.querySelector('div');
const printIMg = (imageUrl)=>
{
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    div.append(img);

    
    
}
const getShows = async (showName)=>
{ try{
  let url = baseUrl+showName;
  const res = await axios.get(url);
  
  printIMg(res.data[0].show.image.medium);
}catch(e)
{
    const h1 = document.createElement('h1');
    h1.innerText = 'sorry dawg no shows :(';
    div.append(h1);
}
};
btn.addEventListener('click',function()
{
    getShows(search.value);
})
