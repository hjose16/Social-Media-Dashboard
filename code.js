const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('ligth');
    btnSwitch.classList.toggle('active');
})