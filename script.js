'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    Mo: { opentimes: 11 - 22 },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[starterIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

const temp = first;
first = second;
second = temp;
console.log(first, second);
[second, first] = [first, second];
console.log(first, second);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [6, 8]];
/* const [i, , j] = nested;
console.log(i, j) */ const [i, , [j, k]] = nested;
console.log(i, j, k);

// Destrucuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// The Spread Operator ...
const array = ['alpha', 'beta', 'gamma', 'Raphaeil ist operator'];
const evilArray = [array[0], array[1], array[2], 'Delta', 'Epsilon'];
const evenMoreEvilArray = [...array, ...evilArray];
console.log(evenMoreEvilArray);

const newMenu = [...restaurant.mainMenu, 'Xorovatz'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu];
const completeMenu = [...menu, ...mainMenuCopy];
console.log(completeMenu);
