// 1- Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.
// function createAdder(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
  
//   const add5 = createAdder(5);
  
//   const result = add5(10);
//   console.log(result);

// 2- Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
// function searchArray(arr, value) {
//     if (arr.length === 0) {
//       return false;
//     }
//     if (arr[0] === value) {
//       return true;
//     }
//     return searchArray(arr.slice(1), value);
//   }
//   const arr = [1, 2, 3, 4, 5, 6, 9, 8];
// const value = 7;
// const found = searchArray(arr, value);
// console.log(found); 

// 3- Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
// function addParagraph(text) {
//     const p = document.createElement('p');  
//     p.textContent = text; 
//     document.body.appendChild(p);  
//   }
//   addParagraph('Hello aliyan!');

//  4- Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item 
// function addListItem(text) {
    
//     const ul = document.querySelector('#myList');
//   const li = document.createElement('li');
//   li.textContent = text;
//   ul.appendChild(li);
//   }

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.
// function changeBackgroundColor(element, newColor) {
//     element.style.backgroundColor = newColor;
//   }

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// function saveToLocalStorage(key, object) {
//     const json = JSON.stringify(object);
//     localStorage.setItem(key, json);
//   }
//   const myObject = { name: "John", age: 30 };
//   saveToLocalStorage("myKey", myObject);
    
// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
// function getFromLocalStorage(key) {
//     const json = localStorage.getItem(key);
//     return JSON.parse(json);
//   }
//   const myObject = getFromLocalStorage("myKey");
  
// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
    
// function saveObjectToLocalStorage(obj) {
    
//     for (const prop in obj) {
    
//       localStorage.setItem(prop, obj[prop]);
//     }

//     const retrievedObj = {};
  
//     for (let i = 0; i < localStorage.length; i++) {
//       const key = localStorage.key(i);

//       retrievedObj[key] = localStorage.getItem(key);
//     }

//     return retrievedObj; // Return the retrieved object
//   }
//   const myObj = {
//     name: "ali",
//     age: 22,
//     city: "Karachi"
//   };
//   const retrievedObj = saveObjectToLocalStorage(myObj);

  
 




  