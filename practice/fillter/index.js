let arr = [
    {
        name : "Bird",
        image : "https://t4.ftcdn.net/jpg/12/63/19/41/360_F_1263194134_EwTmW2a4kzMN6rId7s1LdRJl4NuGwBLP.jpg"
    },
    {
        name : "Bird",
        image : "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg"
    },
    {
        name : "Natural",
        image : "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name : "Natural",
        image : "https://images.pexels.com/photos/9598698/pexels-photo-9598698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name : "Flower",
        image : "https://images.pexels.com/photos/6002219/pexels-photo-6002219.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    },
]

let card = document.querySelectorAll(".card");
let btn = document.querySelectorAll(".btn");

card.forEach((item,idx) =>{
    item.style.backgroundImage = `url(${arr[idx].image})`
})

btn.forEach((button) =>{
    button.addEventListener("click" , (e)=>{
        card.forEach((item) =>{
            item.classList.add("d-none");
            if(e.target.dataset.name == item.dataset.name){
                item.classList.remove("d-none")
            }
        })
    })
})