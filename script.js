const options = {

}

fetch("https://striveschool-api.herokuapp.com/books", options)
.then(response => response.json()
.then(books => { 
    console.log(books)

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


/* This is the "click" counter */
let clicks = 0;

/* THIS IS THE ADDTOCART FUNCTION */
let addToCartClickFunction = (event) => {
     console.log(event.target.closest(".card").querySelector("h5").innerText) 

    /* The cartClick counter */
    clicks += 1;
    document.querySelector(".cart-number").innerHTML = clicks;
 

    card1 = event.target.parentElement.parentElement;
    
    /* The change of styling */
    card1.classList.toggle("clicked-card")

    const row2 = document.querySelector(".row2")

    const sourceImg = event.target.closest(".card").querySelector("img");
    const bookTitle = event.target.closest(".card").querySelector("h5").innerText;

    row2.innerHTML += `
    <div class="card">
        <img src="${sourceImg.src}" class="card-img-top" alt="..." style="width: 50px;">
            <div class="card-body">
                <h5 class="card-title">${bookTitle}</h5>
                <a href="#" class="btn btn-dark" onclick="removeFromCartFunction(event)">remove</a>
                
            </div>
    </div>
    `
}

    /* This is the removeFromCartFunction */
    let removeFromCartFunction = (event) => {
        console.log(event.target.parentElement.parentElement)
        event.target.parentElement.parentElement.remove();
        
        clicks -= 1;
        document.querySelector(".cart-number").innerHTML = clicks;

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


    /* EMPTY WHOLE CART FUNCTION */
   let emptyWholeCartFunction = (event) => {
    console.log(event.target)

    let cart1 = document.querySelector(".row2")
    cart1.innerHTML = ""
    let clicks1 = document.querySelector(".cart-number")
    clicks1.innerHTML = 0
   }