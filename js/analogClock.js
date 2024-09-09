// անալոգային ժամ 

function setClick(){
    const hours = document.querySelector('.hours')
    const mins = document.querySelector('.mins')
    const seconds = document.querySelector('.seconds')
        setInterval(()=>{
        const data = new Date()
        hours.style.rotate = (data.getHours() * 30) + data.getMinutes() / 2 + 'deg'
        mins.style.rotate = (data.getMinutes() * 6) + 'deg'
        seconds.style.rotate = (data.getSeconds() * 6) + 'deg'
        })
}

document.addEventListener('DOMContentLoaded', setClick)