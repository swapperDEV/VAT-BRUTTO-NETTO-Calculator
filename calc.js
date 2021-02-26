let num = document.querySelector('.num')
let type = document.querySelector('.type')
let much = document.querySelector('.much')
let price = document.querySelector('.price')
let prices = price.value
let types = type.value
let final
let varprecent = num.value
const name = document.querySelector('.name')
const muchs = document.querySelector('.much')

const calcit = () => {
    if(types == "bn") {
        console.log('brutton->netto');
        prices = parseInt(prices)
        varprecent = parseInt(varprecent)
        final = prices/(1+(varprecent/100))
        console.log(final);
        name.textContent = ' netto'
        muchs.textContent = final.toFixed(0)
    }
    else if(types == "nb") {
        console.log('netto->brutto');
        final = parseInt(prices) + parseInt((prices * varprecent/100))
        console.log(final);
        name.textContent = ' brutto'
        much.textContent = final.toFixed(0)
    }
}

num.addEventListener('change', ()=> {
    varprecent = num.value 
    calcit()
})
type.addEventListener('change', ()=> {
    types = type.value 
    calcit()
})
price.addEventListener('change', ()=> {
    prices = price.value 
    calcit()
})