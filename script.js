const options = {
    Authorization: "Bearer 563492ad6f91700001000001c24c1792b0394844aefc6c1957db294b"
}

fetch("https://api.pexels.com/v1/search?query=cat", options)
.then(response => response.json()
.then(body => { 
    console.log(body)
    
    console.log(body.photos[0].alt)




}))
