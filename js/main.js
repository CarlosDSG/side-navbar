function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
    document.querySelector('span').style.visibility = 'hidden';
    /* document.querySelector('body').style.filter = 'brightness(31%)'; */
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
    document.querySelector('span').style.visibility = 'visible';
}