"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
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


//figuring out if I can get some part of the text boldened?


//Save selected text in memory
//var selObj = window.getSelection()
//var selText = selObj.toString();

// function saveSelection() {
//   var selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//   localStorage.setItem('Selection', selection);
// };

// textArea.addEventListener('select', saveSelection)


// Save selection
textArea.addEventListener('select', () => {
  const selectionObj = {
    selTarget: event.target,
    selStart: event.target.selectionStart,
    selEnd: event.target.selectionEnd,
    };
  console.log (selectionObj);

  var selStringify = (JSON.stringify (selectionObj));

  sessionStorage.setItem('selectionObj', selStringify);
});


// get to saved selection
function parseSelection () {
  const savedSel = sessionStorage.getItem('selectionObj');
  console.log (savedSel)
  if (sessionStorage.getItem('selectionObj') == true) {
    const selection = JSON.parse(savedSel)
    console.log(selection);
  }
    
};



iconItalic.addEventListener('click', parseSelection)
iconItalic.addEventListener('click', () => {
  //parseSelection
  //selText.style.fontStyle = 'italic
 
});




//Bold the text
iconBold.addEventListener('click', () => {
  if (textArea.style.fontWeight == 'bold') {
    textArea.style.fontWeight = 'normal'
  } else
    textArea.style.fontWeight = 'bold'
});



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

