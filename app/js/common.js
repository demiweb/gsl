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

$(document).ready(function() {
    onScroll();
    $(document).on("scroll", onScroll);
});

function onScroll() {
    var scrollPos = $(document).scrollTop();
    $('.menu ul li a[href*="#"]').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.header-display-desktop .header-nav-item > a[href*="#"]').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

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

// Get all sections that have an ID defined
const sections = document.querySelectorAll(".section");
const menuItems = document.querySelectorAll(".menu ul a");

// Add an event listener listening for scroll
menuItems.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let link = btn.getAttribute("href");


        document.querySelector('.menu-cont').classList.remove('opened');
        document.querySelector('.burger').classList.remove('opened');
        document.body.classList.remove('no-scroll');
        $([document.documentElement, document.body]).animate({
            scrollTop: $(link).offset().top
        }, 600);
    })
});

// scroll animations
var anim = document.querySelectorAll('.anim');

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


let scrollRev = [...document.querySelectorAll('.scroll-rev')];
function scrollDown() {
    if (scrollRev.length) {
        scrollRev.forEach((btn) => {
            btn.addEventListener('click', () => {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".reveal-hand ").offset().top
                }, 500);
            })
        })
    }
}
scrollDown();
// global animations
let bigStar = document.querySelector('.star-big');
let whiteStar = document.querySelector('.text-skills');
let starMov = document.querySelector('.promises-height .star-mov');

var controller = new ScrollMagic.Controller();

function createAnimations() {
    if (window.innerWidth > 920) {
        //big star
        var scene = new ScrollMagic.Scene({triggerElement: ".skills .trigs-blck .trigger", duration: '15%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big img", {
                marginLeft: "-5.0625vw",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "img 1 (duration: 15%)"}) // add indicators (requires plugin)
            .addTo(controller);
        var scene22 = new ScrollMagic.Scene({triggerElement: ".skills .trigs-blck .trigger", duration: '25%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big", {
                marginRight: "9vw",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star (duration: 7000%)"}) // add indicators (requires plugin)
            .addTo(controller);
        var scene2 = new ScrollMagic.Scene({triggerElement: ".skills .trigs-blck .trigger", duration: '50%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big", {
                marginLeft: "0",
                rotation: 13,
                opacity: 1,
                bottom: "30vh",
                right: "32.5625vw",
                width: "2.6042vw",
                height: "2.6042vw",
                filter: "blur(5px)",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star (duration: 70%)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene3 = new ScrollMagic.Scene({triggerElement: ".skills .trigs-blck .trigger2", duration: '25%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big img", {
                marginLeft: "-3vw",
                filter: "blur(5px)",}) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "img 2 (duration: 25%)"}) // add indicators (requires plugin)
            .addTo(controller);
//big star

//white star
        var scene4 = new ScrollMagic.Scene({triggerElement: ".text-skills .trigger", offset: -150})
            // animate color and top border in relation to scroll position
            .setClassToggle(".text-skills", "active") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
            // .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller);
//white star

//star card
        var scene5 = new ScrollMagic.Scene({triggerElement: ".single-skill-card .trigger", offset: 150})
            // animate color and top border in relation to scroll position
            .setClassToggle(".single-skill-card .trigger", "hide") // add class toggle
            // .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller);



//star card move
        let vHeight = window.innerHeight * 90;
// console.log(vHeight);
//formula for getting vh from vw size;
        let h = (25.9 / 100) * window.innerWidth;
        let hVh = (h / window.innerHeight) * 100;

        let h2 = (23.8 / 100) * window.innerWidth;
        let hVh2 = (h2 / window.innerHeight) * 100;
//formula for getting vh from vw size;

        var scene6 = new ScrollMagic.Scene({triggerElement: ".single-skill-card .trigger", duration: `${hVh2 + hVh}%`, offset: 150})
            // animate color and top border in relation to scroll position

            .setTween(".star-mov", {
                // rotation: 13,
                // top: "-3.8vw",
                // left: "60.8%",
                width: "1.8229vw",
                height: "1.8229vw",
                filter: "blur(4px)",
                top: "33.5vh",
                left: "65.8%",
                ease: Linear.easeIn,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);


        var scene24 = new ScrollMagic.Scene({triggerElement: ".single-skill-card .trigger", duration: `${hVh2 + hVh}%`, offset: 150})
            // animate color and top border in relation to scroll position
            .setClassToggle(".star-mov", "hide") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)



            .setTween(".star-mov", {
                marginRight: "-22.55vw",
                ease: Linear.easeOut,

            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "bbbbbbbbbbbbbbbbbb"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene25 = new ScrollMagic.Scene({triggerElement: ".promises-height .trigger-s", duration: `${hVh}%`, offset: 150})
            // animate color and top border in relation to scroll position
            .setTween(".star-mov img", {
                marginRight: "14.5vw",
                ease: Sine.easeIn,

            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "HU2 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}) // add indicators (requires plugin)
            .addTo(controller);


        var scene7 = new ScrollMagic.Scene({triggerElement: ".promises-height .trigger-s", duration: `${hVh}%`, offset: 150})
            // animate color and top border in relation to scroll position

            .setTween(".star-mov", {
                // rotation: 0,
                top: "32.5vh",
                left: "60.8%",

                filter: "blur(1px)",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            // .addTo(controller);

        var scene8 = new ScrollMagic.Scene({triggerElement: ".promises-height .trigger-b", duration: '3%', offset: 58})
            // animate color and top border in relation to scroll position
            .setClassToggle(".promises .big-title", "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);
//star card move

//star card

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

        //planet star

        let durPlanet = document.querySelector('.vision').offsetHeight * 0.7;
        let durPlanet1 = document.querySelector('.vision').offsetHeight * 0.45 * 0.3;
        let durPlanet2 = document.querySelector('.vision').offsetHeight * 0.45 * 0.3;
        let durPlanet3 = document.querySelector('.vision').offsetHeight * 0.45 * 0.3;



        var scene15 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '33.6647vw',
                bottom: '36.5861vw',
                width: "4.0083vw",
                height: "4.0083vw",
                filter: "blur(4px)",
                ease: Linear.easeIn,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star111 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene54 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1 + durPlanet2 + durPlanet3 + 800}px`, offset: -100}, )
            // animate color and top border in relation to scroll position
            .setClassToggle(".star-planet", "active")

            // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);
        var scene52 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1 + durPlanet2 + durPlanet3 + 700}px`, offset: 0}, )
            // animate color and top border in relation to scroll position
            .setClassToggle(".vision .planet", "active")
            // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene32 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1 + durPlanet2 + durPlanet3 + 200}px`, offset: 0}, )
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                marginLeft: '2vw',
                ease: Linear.easeIn,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);


        var scene16 = new ScrollMagic.Scene({triggerElement: ".vision .trg-1", duration: `${durPlanet2}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '39.9647vw',
                bottom: '26.7861vw',
                width: "5.9083vw",
                height: "5.9083vw",
                filter: "blur(5px)",
                ease: Linear.easeOut,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene166 = new ScrollMagic.Scene({triggerElement: ".vision .trg-1", duration: `${durPlanet2}px`, offset: -50},)
            // animate color and top border in relation to scroll position
            .setTween(".star-planet img", {
                marginLeft: '-1vw',
                marginTop: '1vw',
                ease: Sine.easeIn,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "111 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene17 = new ScrollMagic.Scene({triggerElement: ".vision .trg-2", duration: `${durPlanet3}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '35.6647vw',
                bottom: '16.0vw',
                width: "9.7708vw",
                height: "9.7708vw",
                filter: "blur(0px)",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "trg2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene1676 = new ScrollMagic.Scene({triggerElement: ".vision .trg-2", duration: `${durPlanet3}px`, offset: -50},)
            // animate color and top border in relation to scroll position
            .setTween(".star-planet img", {
                marginLeft: '-1.4vw',
                marginTop: '2.4vw',
                ease: Sine.easeOut,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "2222 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);


        var scene177 = new ScrollMagic.Scene({triggerElement: ".vision .trg-3", duration: `${durPlanet3 + (durPlanet3 * 0.5)}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '25.6647vw',
                bottom: '-3.0vw',
                width: "16.7708vw",
                height: "16.7708vw",
                filter: "blur(0px)",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "trg3 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);
//planet star
//parallax 3 el
        var scene16766 = new ScrollMagic.Scene({triggerElement: ".vision .trg-3", duration: `${durPlanet2 + (durPlanet3 * 0.5)}px`, offset: -50},)
            // animate color and top border in relation to scroll position
            .setTween(".star-planet img", {
                marginLeft: '-2.4vw',
                marginTop: '1.4vw',
                ease: Sine.easeOut,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "333 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

    } else {
//big star
        var scene = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger", duration: '15%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big img", {
                marginLeft: "-14.0625vw",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene2 = new ScrollMagic.Scene({triggerElement: ".bg-hand .trigger", duration: '40%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big", {
                marginLeft: "0",
                rotation: 13,
                opacity: 0.8,
                bottom: "-9.3333vw",
                right: "80vw",
                width: "9.4444vw",
                height: "9.4444vw",
                filter: "blur(5px)",
                ease: Linear.easeNone,
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
        var scene4 = new ScrollMagic.Scene({triggerElement: ".text-skills .trigger", offset: 130})
            // animate color and top border in relation to scroll position
            .setClassToggle(".text-skills", "active") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
            // .addIndicators({name: "3 (duration: 300)"}) // add indicators (requires plugin)
            .addTo(controller);
//white star

        //star card move
        let vHeight = window.innerHeight * 90;
// console.log(vHeight);
//formula for getting vh from vw size;
        let h = (23.5 / 100) * window.innerWidth;
        let hVh = (h / window.innerHeight) * 100;

        let h2 = (102.8 / 100) * window.innerWidth;
        let hVh2 = (h2 / window.innerHeight) * 100;
//formula for getting vh from vw size;

        var scene6 = new ScrollMagic.Scene({triggerElement: ".promises", duration: `${hVh2}%`})
            // animate color and top border in relation to scroll position
            .setClassToggle(".star-mov", "hide") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)

            .setTween(".star-mov", {
                marginLeft: "0",
                rotation: 0,
                top: "44.8vw",
                left: "47%",
                width: "6.9444vw",
                height: "6.9444vw",
                filter: "blur(1px)"
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene8 = new ScrollMagic.Scene({triggerElement: ".promises-height .trigger-b", duration: '26%'})
            // animate color and top border in relation to scroll position
            .setClassToggle(".promises .big-title", "visible") // add class toggle.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
            // .addIndicators({name: "star333 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);
//star card move
//parallax 1 el
        var scene9 = new ScrollMagic.Scene({triggerElement: ".logo-section", duration: `130%`})
            // animate color and top border in relation to scroll position

            .setTween(".paral-1 ", {

                top: "90%",

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

                top: "5%",

            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);


        //planet star

        let durPlanet = document.querySelector('.vision').offsetHeight * 0.27;
        let durPlanet1 = document.querySelector('.vision').offsetHeight * 0.27 / 3;
        let durPlanet2 = document.querySelector('.vision').offsetHeight * 0.3 * 0.3;
        let durPlanet3 = document.querySelector('.vision').offsetHeight * 0.9 * 0.4;

        var scene54 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1 + durPlanet2 + durPlanet3 + 500}px`, offset: -100}, )
            // animate color and top border in relation to scroll position
            .setClassToggle(".star-planet", "active")

            // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);
        var scene52 = new ScrollMagic.Scene({triggerElement: ".vision", duration: `${durPlanet1 + durPlanet2 + durPlanet3 + 500}px`, offset: 0}, )
            // animate color and top border in relation to scroll position
            .setClassToggle(".vision .planet", "active")
            // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "star2 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);



        var scene16 = new ScrollMagic.Scene({triggerElement: ".vision .trg-1", duration: `${durPlanet1}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '63.5000vw',
                bottom: '118.1667vw',
                width: "12.7778vw",
                height: "12.7778vw",
                filter: "blur(3px)",

                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "111 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene177 = new ScrollMagic.Scene({triggerElement: ".vision .trg-2", duration: `${durPlanet1}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                right: '78.2778vw',
                bottom: '82.0556vw',
                width: "15.7778vw",
                height: "15.7778vw",
                filter: "blur(2px)",


                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "2222 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);
        var scene17777 = new ScrollMagic.Scene({triggerElement: ".vision .trg-3", duration: `${durPlanet1}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '69.1111vw',
                bottom: '41.0000vw',
                width: "25.7778vw",
                height: "25.7778vw",
                filter: "blur(2px)",


                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "3333 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

        var scene1888 = new ScrollMagic.Scene({triggerElement: ".vision .trg-4", duration: `${durPlanet1}px`})
            // animate color and top border in relation to scroll position
            .setTween(".star-planet", {
                rotation: 0,
                right: '31.1111vw',
                bottom: '-3.0000vw',
                width: "52.7778vw",
                height: "52.7778vw",
                filter: "blur(0px)",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            // .addIndicators({name: "444 (duration: 50)"}) // add indicators (requires plugin)
            .addTo(controller);

//planet star
    }
}

createAnimations();

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



//header
$(window).scroll(function (e) {
    $el = $('.header');
    $el2 = $('.hero-home');
    $el3 = $('.reveal-hand');
    // console.log($(this).scrollTop());
    $el.toggleClass('header-white', $(this).scrollTop() < (window.innerHeight * 0.25));
    $el2.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.25));
    $el3.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.25));

});

function getHeader() {
    $el = $('.header');
    $el2 = $('.hero-home');
    $el3 = $('.reveal-hand');
    $el.toggleClass('header-white', $(window).scrollTop() < (window.innerHeight * 0.3));
    $el2.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.3));
    $el3.toggleClass('reveal', $(this).scrollTop() > (window.innerHeight * 0.3));
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

            var vid = btn;
            var srcVid = vid.dataset.src;
            var posterVid = vid.dataset.poster;

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

            });
            modVid.addEventListener('click', (e) => {
                e.stopPropagation();
            });
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



