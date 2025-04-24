let obj = [
    
    {
        name : "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrcsbVx5Uxg4olzqp_Wt961Zk0V-Nx8ZCvg&s",
        text : "Nice color and style also casual shoes"
    },
    {
        name : "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLLTBbrBcYYkglGYPti86DY0qk05pGmgSmQ&s",
        text : "Nice color and style also casual shoes"
    },
    {
        name : "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1Ik3ISSfDDCUOYylPHw2EYj3AJeowvPZUw&s",
        text : "Nice color and style also casual shoes"
    },
    {
        name : "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssew7j-H96x-EXKW4eeGSCA4P3GUO2WaEOg&s",
        text : "Nice color and style also casual shoes"
    },
    {
        name : "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKZShEok-bCop9YhO7HEbug_MrCrwnlwQhA&s",
        text : "Nice color and style also casual shoes"
    },
    {
        name : "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDrjf428SdTifw_aoz7dftsGCr7OO-xSyhA&s",
       text : "Nice color and style also casual shoes"
    },
]

let card = document.getElementById("#card");


obj.forEach((item) => {
    card.innerHTML += `
    <div>
        <img src="${obj.image}" alt="${obj.name}">
            <div class="card-body">
                <h5 class="card-title"> ${obj.name} </h5>
                    <p class="card-text"> ${obj.text} </P>
                    <button class="btn btn-warning" onclick=addtoCart(${item.id})
                         Add To Cart
                    </button>
            </div>
    </div>`
})