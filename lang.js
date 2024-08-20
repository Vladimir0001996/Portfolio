let lang = navigator.language;
if (localStorage.lang !== undefined) {
  if (localStorage.lang == 'en') {
    window.location.href = 'pages/index-en.html'
  }
}
else {
  if (lang !== 'ru-RU') {
    // console.log('eng');
    window.location.href = 'pages/index-en.html'
  }  
}
// console.log('lang.js');
// console.log(navigator.language);


// else {
//   console.log('eng');
//   window.location.href = 'pages/index-en.html'

// }
