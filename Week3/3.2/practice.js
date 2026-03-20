myName = "Tiffany"

//create a function called greet () that accept one parmeter (name) when called prints "Hello"{name}

function greet(name){
  console.log(`Hello, ${name}`);

}
greet(myName)

function sum(x, y){
console.log(x+y);
}
sum(2,2)

function subtract (x,y)
{console.log(x-y);

}
subtract(11,6)

function shoes(shoe1,shoe2,shoe3){
  console.log(`My Favorite shoes are ${shoe1},and,${shoe2}`);
}
shoes("nike", "addidas");
shoes("addidas", "crocs")


const toppings =["pepperoni", "sausage", "hamburger"];
console.log(toppings[0])
console.log(toppings[1]);
console.log(toppings[2])

for(let topping of toppings){
  console.log(topping)
}


const movies = ["Halloween","Wednesday","SAW"]
function printMovies(movies){
  for (let movie of movies){
    console.log(movie)
  }
}
printMovies(movies)


const favoriteThings ={
  Purse:"Coach",
  Flower:"Sunflower",
  Book:"Thing and Grow Rich"
}
function printFavorites(favorites)
{console.log(`My favorite things are ${favorites.Purse},
  ${favorites.Flower},${favorites.Book}`)}

  printFavorites(favoriteThings)
