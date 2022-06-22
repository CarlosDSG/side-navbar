const overlay = document.querySelector('.overlay');

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginRight = '250px';
    document.querySelector('span').style.visibility = 'hidden';
    overlay.classList.toggle('visible');
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginRight = '0';
    document.querySelector('span').style.visibility = 'visible';
    overlay.classList.toggle('visible');
}