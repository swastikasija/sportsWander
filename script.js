let a = prompt("Enter Your Age: ");
let b = document.querySelector('.eligiblevote');
let c = document.querySelector('.noteligible')
if(a>=18){
    b.style.display = 'block';
    c.style.display = 'none';
 
}
else{
    b.style.display = 'none';
    c.style.display = 'block';
}