const form = document.querySelector('form');
const container = document.querySelector('.moviepic-container');

form.addEventListener('submit', (a)=>{
    a.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);

    tvMazeApi(query);
})

async function tvMazeApi(query){
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const res = await req.json();
    console.log(res);

}