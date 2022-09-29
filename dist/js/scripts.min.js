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
let whiteStar = document.querySelector('.text-skills');
let starMov = document.querySelector('.promises-height .star-mov');

var controller = new ScrollMagic.Controller();
//big star
var scene = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger", duration: '15%'})
    // animate color and top border in relation to scroll position
    .setTween(".star-big img", {marginLeft: "-7.0625vw"}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger", duration: '50%'})
    // animate color and top border in relation to scroll position
    .setTween(".star-big", {
        marginLeft: "0",
        rotation: 13,
        opacity: 0.6,
        bottom: "-3.3333vw",
        right: "46.5625vw",
        width: "2.6042vw",
        height: "2.6042vw",
        filter: "blur(15px)"
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);
var scene3 = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger2", duration: '25%'})
    // animate color and top border in relation to scroll position
    .setTween(".star-big img", {marginLeft: "0"}) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);
//big star
//white star
var scene4 = new ScrollMagic.Scene({triggerElement: ".text-skills .trigger"})
    // animate color and top border in relation to scroll position
    .setClassToggle(".text-skills", "active") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);
//white star

//star card
var scene5 = new ScrollMagic.Scene({triggerElement: ".single-skill-card .trigger"})
    // animate color and top border in relation to scroll position
    .setClassToggle(".single-skill-card .trigger", "hide") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);
//star card

//star card move
let vHeight = window.innerHeight * 90;
// console.log(vHeight);
//formula for getting vh from vw size;
let h = (23.5 / 100) * window.innerWidth;
let hVh = (h / window.innerHeight) * 100;

let h2 = (33.8 / 100) * window.innerWidth;
let hVh2 = (h2 / window.innerHeight) * 100;
//formula for getting vh from vw size;

var scene6 = new ScrollMagic.Scene({triggerElement: ".single-skill-card .trigger", duration: `${hVh2}%`})
    // animate color and top border in relation to scroll position
    .setClassToggle(".star-mov", "hide") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)

    .setTween(".star-mov", {
        marginLeft: "0",
        rotation: 13,
        top: "-10.8vw",
        left: "55%",
        width: "1.9229vw",
        height: "1.9229vw",
        filter: "blur(4px)"
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);


var scene7 = new ScrollMagic.Scene({triggerElement: ".promises-height .trigger-s", duration: `${hVh}%`})
    // animate color and top border in relation to scroll position
    .setClassToggle(".star-mov", "hide") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)


    .setTween(".star-mov", {
        rotation: 0,
        top: "33.7vh",
        left: "48.8%",

        filter: "blur(1px)"
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene8 = new ScrollMagic.Scene({triggerElement: ".promises-height .trigger-b", duration: '10%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(".promises .big-title", "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);
//star card move

//cards visibles
let triggersBlocks = [...document.querySelectorAll('.triggers-block .trigg')];
let triggersCards = [...document.querySelectorAll('.single-promises')];

var card9 = new ScrollMagic.Scene({triggerElement: `.trigg-1`, duration: '32%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(triggersCards[0], "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "card (duration: 30%)"}) // add indicators (requires plugin)
    .addTo(controller);

var card10 = new ScrollMagic.Scene({triggerElement: `.trigg-2`, duration: '32%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(triggersCards[1], "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "card (duration: 30%)"}) // add indicators (requires plugin)
    .addTo(controller);

var card11 = new ScrollMagic.Scene({triggerElement: `.trigg-3`, duration: '32%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(triggersCards[2], "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "card (duration: 30%)"}) // add indicators (requires plugin)
    .addTo(controller);

var card12 = new ScrollMagic.Scene({triggerElement: `.trigg-4`, duration: '32%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(triggersCards[3], "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "card (duration: 30%)"}) // add indicators (requires plugin)
    .addTo(controller);

var card13 = new ScrollMagic.Scene({triggerElement: `.trigg-5`, duration: '32%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(triggersCards[4], "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "card (duration: 30%)"}) // add indicators (requires plugin)
    .addTo(controller);

var card14 = new ScrollMagic.Scene({triggerElement: `.trigg-6`, duration: '32%'})
    // animate color and top border in relation to scroll position
    .setClassToggle(triggersCards[5], "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
    // .addIndicators({name: "card (duration: 30%)"}) // add indicators (requires plugin)
    .addTo(controller);

//cards visibles
//parallax 1 el
var scene9 = new ScrollMagic.Scene({triggerElement: ".logo-section", duration: `100%`})
    // animate color and top border in relation to scroll position

    .setTween(".paral-1 ", {

        top: "70%",

    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);
//parallax 1 el
//parallax 2 el
var scene10 = new ScrollMagic.Scene({triggerElement: ".colors-list", duration: `100%`})
    // animate color and top border in relation to scroll position

    .setTween(".paral-2 ", {

        top: "130%",

    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);
//parallax 2 el
//parallax 3 el
let wbHeight = document.querySelector('.website').offsetHeight;
// console.log(wbHeight + ' hhehhqweqwe');
var scene11 = new ScrollMagic.Scene({triggerElement: ".website", duration: `${wbHeight}px`})
    // animate color and top border in relation to scroll position

    .setTween(".website .round ", {

        top: "15%",

    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);
//parallax 3 el
//planet star

let durPlanet = document.querySelector('.vision').offsetHeight * 0.7;
let durPlanet1 = document.querySelector('.vision').offsetHeight * 0.6 * 0.3;
let durPlanet2 = document.querySelector('.vision').offsetHeight * 0.6 * 0.3;
let durPlanet3 = document.querySelector('.vision').offsetHeight * 0.6 * 0.4;
var scene15 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1}px`})
    // animate color and top border in relation to scroll position
    .setTween(".star-planet", {
        rotation: 0,
        right: '35.6647vw',
        bottom: '32.7861vw',
        width: "5.2083vw",
        height: "5.2083vw",
        filter: "blur(5px)",
        ease: Linear.easeNone,
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene16 = new ScrollMagic.Scene({triggerElement: ".vision .trg-1", duration: `${durPlanet2}px`})
    // animate color and top border in relation to scroll position
    .setTween(".star-planet", {
        rotation: 0,
        right: '39.6647vw',
        bottom: '18.7861vw',
        width: "9.2083vw",
        height: "9.2083vw",
        filter: "blur(3px)",
        ease: Linear.easeNone,
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);

var scene17 = new ScrollMagic.Scene({triggerElement: ".vision .trg-2", duration: `${durPlanet3}px`})
    // animate color and top border in relation to scroll position
    .setTween(".star-planet", {
        rotation: 0,
        right: '31.6647vw',
        bottom: '-3.0vw',
        width: "16.7708vw",
        height: "16.7708vw",
        filter: "blur(0px)",
        ease: Linear.easeNone,
    }) // the tween durtion can be omitted and defaults to 1
    // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
    .addTo(controller);

//planet star

//header
$(window).scroll(function (e) {
    $el = $('.header');
    $el2 = $('.hero-home');
    $el3 = $('.reveal-hand');
    // console.log($(this).scrollTop());
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



