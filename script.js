//Make sure animation runs once


//when click here is pressed, scale in to screen image
const clickhere = document.querySelector(".clickhere");
const screen = document.querySelector('body');
const text = document.querySelector('.container');

clickhere.addEventListener('click', () => {
    console.log("clicked");
    screen.classList.add('zoom');
    text.classList.add('invisible');
    clickhere.classList.add('invisible');


    console.log('check');
    setTimeout(() => {
    const url = 'test.html';
    const target = '_self';
    window.open(url, target);
}, 4000);
});


//setTimeout(()=>{
  //  screen.addEventListener('animationene', () => {
    //    window.open(url, target);
    
//}, 4000)