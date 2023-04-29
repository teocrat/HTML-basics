const menuActive = document.querySelector('.invisible_menu'); 

const headerMenu = document.querySelector('.menu_burger'); 
 

function toggleMenu() {
	menuActive.classList.toggle('hidden'); 
}

headerMenu.addEventListener('click', toggleMenu); 
