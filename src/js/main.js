"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const iconBold = document.querySelector('.icons__bold--js');
const iconItalic = document.querySelector('.icons__italic--js');
const iconList = document.querySelector('.icons__list--js');

var textArea = document.getElementById('textarea');

const buttonLoad = document.querySelector('.button__load--js');
const buttonSave = document.querySelector('.button__save--js');



var selText = window.getSelection()


// iconBold.addEventListener('click', () => {
//   console.log(selText)
//   selText.classList.add('.form__input--bold');
// });

// localStorage.setItem('SavedText', textArea)


//Save the text from textarea
buttonSave.addEventListener('click', () => {
  localStorage.setItem('SavedText', textArea.value);
});


//Load the text from local storage
buttonLoad.addEventListener('click', () => {
  var loadText = localStorage.getItem('SavedText');
  textArea.value = loadText;
  console.log(loadText);
});

