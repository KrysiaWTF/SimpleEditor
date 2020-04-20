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

  var selStringify = (JSON.stringify(selectionObj));

  sessionStorage.setItem('selectionObj', selStringify);
});


// get to saved selection
// function parseSelection() {
//   if (sessionStorage.getItem('selectionObj') !== null) {
//     const savedSel = sessionStorage.getItem('selectionObj');
//     selection = JSON.parse(savedSel);
//     // console.log(selection);
//   }
// };


//Split the string in textarea to get the selection
function textSlice() {
  //parse selection from session storage
  const savedSel = sessionStorage.getItem('selectionObj');
  const mySel = JSON.parse(savedSel);
  if (sessionStorage.getItem('selectionObj') !== null) {
    mySel
    console.log(mySel)
  }
  //get the start and end of selevtion
    const selS = mySel.selStart
    const selE = mySel.selEnd

  //slice the text
    const txt = textArea.value;
  
    var txtBegin =  txt.slice(0, selS);
    var txtSel = txt.slice(selS, selE);
    var txtEnd = txt.slice(selE);

    console.log(txt.slice(0, selS))
    console.log(selS)
    console.log(selE)
    console.log(txtEnd)


  // if (txtSel.style.fontStyle == 'italic') {
  //   txtSel.style.fontStyle == 'normal'
  // } else
  //   txtSel.style.fontStyle == 'italic';

  let txtCon = txtBegin.concat(txtSel, txtEnd)
  textArea.value = txtCon

};


//Make the style Italic
iconItalic.addEventListener('click', () => {
  if (textArea.style.fontStyle == 'italic') {
    textArea.style.fontStyle = 'normal'
  } else
    textArea.style.fontStyle = 'italic'

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
  if (localStorage.getItem('SavedText') == null) {
    alert('Nothing to load!')
  } else
  textArea.value = loadText;
});
