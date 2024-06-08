const menu = document.querySelector('#menu_burger');
const menuBox = document.getElementById('menu_box_mob');
const menuContainer = document.getElementById('header_container_mob');
menu.addEventListener('click', function (){

  if (menuBox.style.display === 'block') {
    menuBox.style.display = 'none';
    menuContainer.style.backgroundColor = 'transparent';
  }

  else {
    menuBox.style.display = 'block';
    menuContainer.style.backgroundColor = '#E3FFF1';
  };
})

const link1 = document.getElementById('burger_link1').addEventListener('click', function() {
  menuBox.style.display = 'none';
  menuContainer.style.backgroundColor = 'transparent';
  console.log(1);
});
const link2 = document.getElementById('burger_link2').addEventListener('click', function() {
  menuBox.style.display = 'none';
  menuContainer.style.backgroundColor = 'transparent';
  console.log(2);
});
const link3 = document.getElementById('burger_link3').addEventListener('click', function() {
  menuBox.style.display = 'none';
  menuContainer.style.backgroundColor = 'transparent';
  console.log(3);
});
const link4 = document.getElementById('burger_link4').addEventListener('click', function() {
  menuBox.style.display = 'none';
  menuContainer.style.backgroundColor = 'transparent';
  console.log(4);
});
const link5 = document.getElementById('burger_link5').addEventListener('click', function() {
  menuBox.style.display = 'none';
  menuContainer.style.backgroundColor = 'transparent';
  console.log(5);
});
const link6 = document.getElementById('burger_link6').addEventListener('click', function() {
  menuBox.style.display = 'none';
  menuContainer.style.backgroundColor = 'transparent';
  console.log(6);
});
