var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();

//animations all
//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();


// global animations

let bigStar = document.querySelector('.star-big');
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger", duration: '15%'})
    // animate color and top border in relation to scroll position
    .setTween(".star-big", {bottom: "14.2083vw", right: "32.0625vw", width: "11.9792vw", height: "11.9792vw", filter: "blur(25px)"}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger2", duration: '35%'})
    // animate color and top border in relation to scroll position
    .setTween(".star-big", {rotation:13, opacity: 0.6, bottom: "-3.3333vw", right: "46.5625vw", width: "2.6042vw", height: "2.6042vw", filter: "blur(25px)"}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);


//header
$(window).scroll(function (e) {
    $el = $('.header');
    $el2 = $('.hero-home');
    $el3 = $('.reveal-hand');
    console.log($(this).scrollTop());
    $el.toggleClass('header-white', $(this).scrollTop() < (window.innerHeight * 0.6));
    $el2.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.6));
    $el3.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.6));

});
function getHeader() {
    $el = $('.header');
    $el2 = $('.hero-home');
    $el3 = $('.reveal-hand');
    $el.toggleClass('header-white', $(window).scrollTop() < (window.innerHeight * 0.6));
    $el2.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.6));
    $el3.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.6));
}

getHeader();
//header


// global animations

// var rellax = new Rellax('.rellax-h', {});
// $('.rellax-v').paroller();


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.menu-cont');

function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('opened');
                header.classList.toggle('opened');
                document.body.classList.toggle('no-scroll')
            })
        })
    }
}
burgerControl();

//video modal control

var videoCont = [...document.querySelectorAll('.video-js')];
var videoModal = [...document.querySelectorAll('.video-modal')];

function controlVideo() {
    if (videoCont.length) {
        videoCont.forEach((btn, k) => {
            var vid = btn.querySelector('video');
            var srcVid = vid.src;
            var posterVid = vid.poster;
            var modVid = videoModal[0].querySelector('video');
            var modSrc = modVid.src;
            var modPoster = modVid.poster;
            // console.log(srcVid);
            btn.addEventListener('click', () => {
                videoModal[0].querySelector('video').src = srcVid;
                modPoster = posterVid;
                videoModal[0].classList.add('opened');
                document.body.classList.add('no-scroll');

            });
            videoModal[0].addEventListener('click', () => {
                videoModal[0].classList.remove('opened');
                document.body.classList.remove('no-scroll');
                videoModal[0].querySelector('video').src = '';
                modPoster = '';

            })
            modVid.addEventListener('click', (e) => {
                e.stopPropagation();
            })
            videoModal[0].querySelector('.close-video').addEventListener('click', () => {
                videoModal[0].classList.remove('opened');
                document.body.classList.remove('no-scroll');
                videoModal[0].querySelector('video').src = '';
                modPoster = '';
            })
        })
    }
}

controlVideo();
//video modal control



