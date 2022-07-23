
 function toggleNav(event) {
    document.querySelector('.menu-bar').classList.toggle('show');
    event.stopPropagation();
}

 function closeMenu() {
    document.querySelector('.menu-bar').classList.remove('show');
}

function preventClose(event) {
    event.stopPropagation();
}
 
 

/* document.querySelector('.menu-btn').addEventListener
    ('click', () => document.querySelector('.menu-bar').
        classList.toggle('show')); */