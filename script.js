const show = document.getElementById("show")

show.addEventListener('click', ()=>{
    modal.classList.add('visible')
})

const hide = document.getElementById("hide")

hide.addEventListener('click', ()=>{
    modal.classList.remove('visible')
})









/* document.getElementById ("exibir").addEventListener("click", function() {
    var div = document.getElementById ("pop-up");
    div.style.display = "block";
}); */

/* function exibir() {
    var display = document.getElementById("pop-up").style.display
    if ( display == 'none')
        document.getElementById("pop-up").style.display = 'block';
    else
        document.getElementById("pop-up").style.display = 'none';
} */