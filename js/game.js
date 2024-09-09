const cells = document.querySelectorAll('.cell')
const line = document.querySelectorAll('.line')
const button = document.querySelector('.Game-button')
let crossAndCircle = false
const crossAndCircleArrey = []
let crossAndCircleCount = 0
let winner = null
let winnerNumber = null
const cross = `<i class="fa-solid fa-xmark"></i>`
const circle = `<i class="fa-regular fa-circle"></i>`

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

cells.forEach((elem, index)=>{
    elem.addEventListener('click', function(){

        if (winner) return

        if(crossAndCircleArrey[index] === undefined){
            crossAndCircleArrey[index] = crossAndCircle
            crossAndCircleCount++
        }else return

        crossAndCircle ? elem.innerHTML = circle : elem.innerHTML = cross
        crossAndCircle = !crossAndCircle
        
        if(crossAndCircleCount > 4){
            const result = findWinner(crossAndCircleArrey)
            winner = result[0]
            winnerNumber = result[1]
            
            if (winnerNumber !== null) {
                line[winnerNumber].classList.add(`line-${winnerNumber}`)
            }
        }
    })
})

function findWinner(arr){
    let indexFalse = []
    let indexTrue = []

    arr.forEach((elem, index)=>{
        if(elem == true){
            indexTrue.push(index)
        }else {
            indexFalse.push(index)
        }
    })

    for (let i = 0; i < winningCombinations.length; i++) {
        if (arraysEqual(winningCombinations[i], indexTrue)) {
            return ['Winner Circle', i]
        }
        if (arraysEqual(winningCombinations[i], indexFalse)) {
            return ['Winner Cross', i]
        }
    }

    return [null, null]
}

function arraysEqual(arr1, arr2) {
    let count = 0

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) count++
        if(count === 3) return true
    }
    
    return false
}

button.addEventListener('click', function(){
    window.location.reload()
})