const colors = ["green", "red", "blue", 'Crimson','DarkRed' , 'Brown', 'Purple','whitesmoke', 'black', 'pink', 'AliceBlue', "#f15025"];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * colors.length);    //generates random number between array lenght;
    const setColor = colors[randomNumber]  //setting a random color from array 
    
    document.body.style.background = setColor; //SETTING THE BG COLOR OF BODY FROM RANDOM COLOR FROM ARRAY
    color.textContent = setColor;  //setting the inner text 

})