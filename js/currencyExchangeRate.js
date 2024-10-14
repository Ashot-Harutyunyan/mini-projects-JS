const container = document.querySelectorAll('.currency-exchange-rate-container')
const containerDivs = document.querySelectorAll('.currency-exchange-rate-container div')
const icon = document.querySelectorAll('.fa-circle-chevron-down')
const input = document.querySelector('.input')
const iconInput = document.querySelector('.fa-circle-xmark')
const currency = document.querySelector('.number')
let count = [0, 0]

fetch('https://v6.exchangerate-api.com/v6/11cdf61e3f036d169e5ca967/latest/USD')
.then(res => res.json())
.then(data => {

    const obj = {
        AMD: data.conversion_rates.AMD.toFixed(2),  
        USD: data.conversion_rates.USD.toFixed(2),  
        EUR: data.conversion_rates.EUR.toFixed(2),
        RUB: data.conversion_rates.RUB.toFixed(2),
        GEL: data.conversion_rates.GEL.toFixed(2),
        GBP: data.conversion_rates.GBP.toFixed(2)
    }

    let inputCurrency = obj.AMD
    let outputCurrency = obj.USD

    input.defaultValue = obj.AMD
    currency.textContent = obj.USD
    
    containerDivs.forEach((elem, index)=>{
        elem.addEventListener('click', function(e){
            if(index < 6){
                container[0].classList.remove('container-open')
                containerDivs[count[0]].classList.remove('first-element')
                elem.classList.add('first-element')
                count[0] = index
                input.value = obj[e.target.dataset.n]
                inputCurrency = obj[e.target.dataset.n]
                calculate(inputCurrency, input.value, outputCurrency, currency)
            }else {
                container[1].classList.remove('container-open')
                containerDivs[count[1]].classList.remove('first-element')
                elem.classList.add('first-element')
                count[1] = index  
                currency.textContent = obj[e.target.dataset.n] 
                outputCurrency = obj[e.target.dataset.n] 
                calculate(inputCurrency, input.value, outputCurrency, currency)
            }
        })     
    })
    
    input.addEventListener('input', function(e){
        this.value = this.value.replace(/\D/g, '')
        calculate(inputCurrency, e.target.value, outputCurrency, currency)
    })

})

function calculate(arg1, arg2, arg3, arg4){
    let one = arg2 / arg1
    let two = one * arg3
    return arg4.textContent = two.toFixed(2)
}

icon.forEach((elem, index)=>{
    elem.addEventListener('click', function(){
    container[index].classList.toggle('container-open')
    elem.classList.toggle('icon-transform')
    })
})

iconInput.addEventListener('click', function(e){    
    input.value = ''
    currency.textContent = ''
})