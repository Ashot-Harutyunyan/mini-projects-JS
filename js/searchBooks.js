const form = document.querySelector('form')
const container = document.querySelector('.container-books')
const input = document.querySelector('.search-books-input')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const {name: { value: name }} = e.target    
    getData(name)
})

input.addEventListener('input', function(e){
    if(e.target.value === ''){
        container.innerHTML = ''
    }
})

async function getData(arg) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${arg}`
    container.innerHTML = ''
    try {
        const res = await fetch(url)
        const data = await res.json()
        data.items.map((e)=>{    
            let booksImg = e.volumeInfo.imageLinks?.thumbnail    
            let booksLink = e.volumeInfo.infoLink   
                    return container.innerHTML += `
                        <div>
                            <img src=${booksImg ? booksImg : './img/books.png'} alt="">
                            <hr>
                            <a href=${booksLink} target="_blank">Book Information</a>
                        </div>
                    `
        })
    } catch(error) {
        container.innerHTML = `
            <h2>No data found for your request</h2>`
    }
}