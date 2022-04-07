const options = {

}

fetch("https://striveschool-api.herokuapp.com/books", options)
.then(response => response.json()
.then(books => { 
    console.log(books)
    console.log(books[0].img)

    booksArr = [...books];

    const row1 = document.querySelector(".row1")

    books.forEach(book => {
    const col1 = document.createElement("div");
    col1.classList.add("col-sm-4")

    col1.innerHTML = `
    <div class="card">
        <img src="${book.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">${book.category} | ASIN: ${book.asin}</p>
                <a href="#" class="btn btn-primary" onclick="addToCartClickFunction(event)">Add to cart</a>
                <a href="#" class="btn btn-primary" onclick="hideButton(event)">Skip</a>
            </div>
    </div>
    `
    row1.appendChild(col1)        
    });

}))


/* This is the addToCartFunction */
let addToCartClickFunction = (event) => {
    console.log(event.target.closest("div").innerHTML)

    card1 = event.target.parentElement.parentElement;
    const row2 = document.querySelector(".row2")

    row2.innerHTML += `
    <div class="card">
        <img src="${event.target.closest("div")}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${event.target.parentElement.innerText}</h5>
                <a href="#" class="btn btn-dark" >remove</a>
                
            </div>
    </div>
    `
}

    /* This is the Skip/HideButton function */
    let hideButton = (event) => {
        event.target.closest(".col-sm-4").remove();
    }


    /* input field function */
    let inputFunction = (event) => {
        console.log(event.target.value)

        let searchQuery = event.target.value;
        console.log(searchQuery)
        const row1 = document.querySelector(".row1")
        
        row1.innerHTML = ""

        console.log(booksArr.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase())))
        
        booksArr.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .forEach(book => {
            const col3 = document.createElement("div");
            col3.classList.add("col-sm-4")
            
            col3.innerHTML = `<div class="card">
            <img src="${book.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.category} ASIN: ${book.asin}</p>
                    <a href="#" class="btn btn-primary" onclick="addToCartClickFunction(event)">Add to cart</a>
                    <a href="#" class="btn btn-primary" onclick="hideButton(event)">Skip</a>
                </div>
        </div>
            `
            row1.appendChild(col3)
        })


    }