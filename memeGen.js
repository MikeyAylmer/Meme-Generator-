// selectors to grab form and img.
let form = document.querySelector('form');
let img = document.getElementsByTagName('img');
const button = document.querySelector('button');
// to fire without waiting.
document.addEventListener('DOMContentLoaded', () =>{
form.addEventListener('submit', function(e){
    // used to stop page from automatically refreshing.
    e.preventDefault();
    // creating a space for the meme
    const meme = document.createElement('div');
    const topText = document.createElement('div');
    const bottomText = document.createElement('div');
    const img = document.createElement('img');
    const remove = document.createElement('button');
    // adding img src and txt input to meme
    img.src = document.getElementById('imageUrl').value;
    topText.classList.add('topText');
    topText.innerHTML = document.getElementById('textTop').value;

    bottomText.classList.add('bottomText');
    bottomText.innerHTML = document.getElementById('textBottom').value;

    remove.innerText = 'X';

    // button to remove appended meme.
    remove.addEventListener('click', function(event){
        meme.remove(meme);
    })
    // appending meme to created div.
    meme.classList.add('meme');
    meme.appendChild(topText)
    meme.appendChild(bottomText)
    meme.appendChild(remove);
    meme.appendChild(img);
    let memeLocation = document.getElementById('location');
    memeLocation.append(meme);
    
    form.reset()

})})

