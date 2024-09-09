// օրացույց

const divCalendar = document.querySelector('.calendar')
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]
const weeks = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su',]
let createYear = new Date()

    month.forEach((elem, ind)=>{
        let element = document.createElement('div')
        let title = document.createElement('h2')
        title.textContent = elem
        element.appendChild(title)
        divCalendar.appendChild(element)  

        let div = document.createElement('div')
        div.className = 'element'

        weeks.forEach((elemWeeks, index)=>{   
            let week = document.createElement('p')
            week.className = 'first'
            week.textContent = elemWeeks
            div.appendChild(week) 

            calendar(index, createYear.getFullYear(), ind).forEach((e)=>{
                
                
                let dey = document.createElement('p')
                dey.className = 'second'
                dey.textContent = e
                if(elemWeeks == 'Su')  dey.className = 'red'
                if(e == '')  dey.className = 'black'
                if(ind === createYear.getMonth()){
                    if(e == createYear.getDate()) dey.className = 'second day'
                }
                week.appendChild(dey)
            })
        })
        element.appendChild(div)
    })  


function calendar(arg, year, month){

    let arr = [[],[],[],[],[],[],[]]
    
    for(let i = 1; i <= 31; i++){
        let startMonth = new Date(year,  month, i)
        if(i !== +startMonth.getDate()) break
        arr[startMonth.getDay()].push(startMonth.getDate())
    }

    let sunday = arr.splice(0, 1)
    arr.push(...sunday)

    for(let i = 0; i <= arr.length -1; i++){
        if(arr[i][0] !== 1) arr[i].unshift('')
            else break
    }

        return arr[arg]
}