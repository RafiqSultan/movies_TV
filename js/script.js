// Loader
function loader() {
    document.querySelector('.loader-bg').classList.add('fade-out');
}

function fadeOut() {
    setInterval(loader, 2000);
}
window.onload = fadeOut;


// Search
let searchForm = document.querySelector('.search');
document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        notification.classList.remove('active');
        profile.classList.remove('active');

    }
    // Notifaction
let notification = document.querySelector('.notification');
document.querySelector('#notification-btn').onclick = () => {
        notification.classList.toggle('active');
        searchForm.classList.remove('active');
        profile.classList.remove('active');

    }
    // Profile-form
let profile = document.querySelector('.profile-form');
document.querySelector('#profile-form-btn').onclick = () => {
        profile.classList.toggle('active');
        notification.classList.remove('active');
        searchForm.classList.remove('active');

    }
    // chat-Form
let chatForm = document.querySelector('.chat-form');
document.querySelector('#chat-form-btn').onclick = () => {
    chatForm.classList.toggle('active');
    // notification.classList.remove('active');
    // searchForm.classList.remove('active');
}

// chat-close using dash-lg-----
let chatFormClose = document.querySelector('.chat-form');
document.querySelector('#chat-form-hid-btn').onclick = () => {
    chatFormClose.classList.toggle('active');
    // notification.classList.remove('active');
    // searchForm.classList.remove('active');
}


// up icon------------
var lastSCrollTop = 0;
upIcon = document.getElementById("upIcon-btn");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastSCrollTop) {
        upIcon.style.visibility = "visible";
    } else {
        upIcon.style.visibility = "hidden";
    }
    lastSCrollTop = scrollTop;
})



// Popular carousol --------------------------
var swiper = new Swiper('.swiper-popular-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',

    },
});



// top 10 movies
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',

    },
});