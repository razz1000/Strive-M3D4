const options = {

}

fetch("https://striveschool-api.herokuapp.com/books", options)
.then(response => response.json()
.then(books => { 
    console.log(books)
    console.log(books[0].img)

    const row1 = document.querySelector(".row")

    books.forEach(book => {
    const col1 = document.createElement("div");
    col1.classList.add("col-sm-4")

    col1.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${book.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
                <a href="#" class="btn btn-primary">Skip</a>
            </div>
    </div>
    `
    row1.appendChild(col1)        
    });

}))
