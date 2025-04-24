let obj = [
    {
        id: 1,
        name: "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrcsbVx5Uxg4olzqp_Wt961Zk0V-Nx8ZCvg&s",
        text: "Nice color and style also casual shoes"
    },
    {
        id: 2,
        name: "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLLTBbrBcYYkglGYPti86DY0qk05pGmgSmQ&s",
        text: "Nice color and style also casual shoes"
    },
    {
        id: 3,
        name: "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1Ik3ISSfDDCUOYylPHw2EYj3AJeowvPZUw&s",
        text: "Nice color and style also casual shoes"
    },
    {
        id: 4,
        name: "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssew7j-H96x-EXKW4eeGSCA4P3GUO2WaEOg&s",
        text: "Nice color and style also casual shoes"
    },
    {
        id: 5,
        name: "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKZShEok-bCop9YhO7HEbug_MrCrwnlwQhA&s",
        text: "Nice color and style also casual shoes"
    },
    {
        id: 6,
        name: "White Shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDrjf428SdTifw_aoz7dftsGCr7OO-xSyhA&s",
        text: "Nice color and style also casual shoes"
    },
]
let cartArr = JSON.parse(localStorage.getItem("obj")) || []
let card = document.getElementById("card");
let counter = document.getElementById("counter")
function addtoCart(productId) {
    let contain = obj.find((item) => {
        return productId == item.id;
    })

    let productIdx = cartArr.findIndex((item) => {
        return productId == item.id;
    })

    if (productIdx != -1) {
        alert("heeeeeeeeee")
    } else {
        contain.quantity = 1;
        cartArr.push(contain)
        localStorage.setItem("obj", JSON.stringify(cartArr))
    }
    counter.innerHTML = cartArr.length;
}

counter.innerHTML = cartArr.length;
obj.forEach((item) => {
    card.innerHTML += `
                <div class="col-4">
                        <div class="card" style="width: 18rem;" >
                            <div>
                                <img src="${item.image}" alt="${item.name}">
                                    <div class="card-body">
                                        <h5 class="card-title"> ${item.name} </h5>
                                            <p class="card-text"> ${item.text} </P>
                                            <button class="btn btn-warning" onclick="addtoCart(${item.id})">
                                                 Add To Cart
                                            </button>
                                    </div>
                            </div>
                        </div>
                    </div>
   `
})