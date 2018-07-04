var showBtns = document.querySelectorAll('.rotate__card'); 
var hideBtns = document.querySelectorAll('.rotate-back__card');

showBtns.forEach(function(showBtn){
    showBtn.addEventListener('click', rotate);
});

hideBtns.forEach(function(hideBtn){
    hideBtn.addEventListener('click', rotateBack);
})

function rotate(e){
    e.preventDefault();
    e.target.parentElement.style.transform = 'rotateY(180deg)';
    e.target.parentElement.nextElementSibling.style.transform = 'rotateY(0)';
    console.log(e);
}

function rotateBack(e){
    e.preventDefault();
    e.target.parentElement.style.transform = 'rotateY(-180deg)';
    e.target.parentElement.previousElementSibling.style.transform = 'rotateY(0deg)';
}