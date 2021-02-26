const check = document.querySelector('.checkin')
const red = document.querySelector('.red')
let menuflag = true;

check.addEventListener('click',() => {
    console.log('klik');
    if(menuflag === true) {
    red.style.transform = "translate(0%,0%)"
    menuflag = false;
    console.log('menu on');
    }
    else if(menuflag === false) {
        red.style.transform = "translate(-100%,-100%)"
        menuflag = true;
        console.log('menu off');
    }
})