///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - nameOfPizza (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
let pizza = {
    nameOfPizza: "Cheese-Tastic Cheese Pizza", 
    category: "entree",
    popularity: 9,
    rating: 8.5,
    tags: ["Gluten-Free", "Vegan", "Vegan Cheese", "Cheese"]
  }
// console.log(pizza)


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log("Popularity: " + pizza.popularity)
console.log(`${pizza.popularity} out of 11 people in Nashville say that Cheese-Tastic Cheese pizza is 
THE CHEESIEST cheese pizza they have ever cheesed in their life! #CheeseUp!`)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(`2nd Tag: ${pizza.tags[1]}`)


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {nameOfPizza, price, category, popularity, rating, tags} = pizza
console.log(`The price of the ${nameOfPizza} is $$${price}.`)
  

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
//Already destructured above
console.log("Category: " + category)
//Console.log to act a as separater in the Console
console.log(" ")

//////////////////PROBLEM 3////////////////////s
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [
    {
      nameOfPizza: "Pepperoni Delight Pizza",
      price: 40,
      category: "entree",
      popularity: 8,
      rating: 9.0,
      tags: ["Meat Lover", "Spicy", "Cheese"]
    },
    {
      nameOfPizza: "Vegetarian Supreme Pizza",
      price: 32,
      category: "entree",
      popularity: 7,
      rating: 8.0,
      tags: ["Vegetarian", "Mushrooms", "Peppers", "Cheese"]
    },
    {
      nameOfPizza: "Hawaiian Luau Pizza",
      price: 38,
      category: "entree",
      popularity: 6,
      rating: 7.5,
      tags: ["Pineapple", "Ham", "Cheese"]
    },
    {
      nameOfPizza: "BBQ Chicken Feast Pizza",
      price: 42,
      category: "entree",
      popularity: 7,
      rating: 8.2,
      tags: ["BBQ Sauce", "Chicken", "Onions", "Cheese"]
    },
    {
      nameOfPizza: "Supreme Meat and Veggie Pizza",
      price: 45,
      category: "entree",
      popularity: 9,
      rating: 8.7,
      tags: ["Pepperoni", "Sausage", "Olives", "Mushrooms", "Peppers", "Cheese"]
    }
  ];  

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
// const filteredFood = foodArr.filter(/* CALLBACK HERE */)
const filteredFood = foodArr.filter(function(element, index, wholeArray){
  return element.tags.includes("Cheese")
})
console.log(filteredFood)

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE 
function filterByProperty(property, number, type) {
    let filteredArray = foodArr.filter(function(food) {
      if (type === "above") {
        return food[property] > number;
      } else if (type === "below") {
        return food[property] < number;
      }
    });
    return filteredArray;
  }
/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
const y = filterByProperty("rating", 8.0, "above")
console.log(y)
