let obj = {
    name : "Janvi Patel",
    grid : 8175,
    isDeveloper : true
};

//first way 
// console.log(obj.grid);

//second way
console.log(obj["isDeveloper"]);
obj.isDeveloper = false;
console.log(obj["isDeveloper"]);

for(let key in obj){
    console.log(key);
}