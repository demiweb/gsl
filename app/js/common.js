

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









var tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//show seo
var hiddenCarr = [...document.querySelectorAll('.show-text')];


function openHideText() {
    if (hiddenCarr.length) {
        hiddenCarr.forEach((btn) => {
            var hidden = btn.dataset.hidden;
            var show = btn.dataset.show;
            btn.addEventListener('click', () => {
                if (btn.closest('.text-section').classList.contains('visible')) {
                    btn.closest('.text-section').classList.remove('visible');
                    btn.innerHTML = hidden;
                } else {
                    btn.closest('.text-section').classList.add('visible');
                    btn.innerHTML = show;
                }
            })
        })
    }
}

openHideText();


var rellax = new Rellax('.rellax-h', {});
$('.rellax-v').paroller();

let cardsImages = [...document.querySelectorAll('.single-project .card')];

function cardsMovement() {
    if (cardsImages.length) {
        cardsImages.forEach((btn, k) => {
            let topTop = btn.getBoundingClientRect().top - window.innerHeight;
            let botTop = btn.getBoundingClientRect().bottom;
            // console.log(topTop + ' bot = ' + botTop + ' height ' + window.innerHeight)
            if (topTop <= 0 && botTop >= 0) {
                let trans = botTop / 11;
                if ((k + 1) % 2 === 0) {

                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, -${trans}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, -${trans}px)`;
                    }
                } else {
                    trans = -trans;
                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    }


                }
            }
        })
    }
}

let paralls = [...document.querySelectorAll('.paralls')];

function parallsRoll() {
    if (paralls.length) {
        paralls.forEach((btn, k) => {
            let topTop = btn.getBoundingClientRect().top - window.innerHeight;
            let botTop = btn.getBoundingClientRect().bottom;
            // console.log(topTop + ' bot = ' + botTop + ' height ' + window.innerHeight)
            if (topTop <= 0 && botTop >= 0) {
                let trans = botTop / 11;
                if ((k + 1) % 2 === 0) {

                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, -${trans}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, -${trans}px)`;
                    }
                } else {
                    trans = -trans;
                    if (btn.querySelector('img')) {
                        if (window.innerWidth < 600) {
                            trans = trans / 2;
                        }
                        btn.querySelector('img').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    } else {

                        btn.querySelector('svg').style.transform = `translate(0, ${-trans * 1.5}px)`;
                    }


                }
            }
        })
    }
}

parallsRoll();
cardsMovement();
window.addEventListener('scroll', () => {
    cardsMovement();
    parallsRoll();
})

//parallax
var menuLang = [...document.querySelectorAll('.lang > span')];

function controlLang() {
    if (menuLang.length) {
        menuLang.forEach((btn) => {

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                btn.closest('.lang').classList.toggle('open');
            })
        })
    }
}

controlLang();

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');
var backdrop = document.querySelector('.backdrop');


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColored(rec) {
    var n1 = randomNumber(0, 8);
    var n2 = randomNumber(0, 8);
    var n3 = randomNumber(0, 8);
    rec.forEach((btn, k) => {
        btn.classList.remove('gr');
    })
    rec.forEach((btn2, l) => {
        if (l === n1 || l === n2 || l === n3) {
            btn2.classList.add('gr');
        }
    })
}

function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {
            var rects = [...document.querySelectorAll('svg rect')];
            setInterval(() => {
                changeColored(rects)
            }, 1700);

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                backdrop.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

//change colored sqr
function randomNumber2(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColored2(rec) {
    var n1 = randomNumber(0, 15);
    var n2 = randomNumber(0, 15);
    var n3 = randomNumber(0, 15);
    rec.forEach((btn, k) => {
        btn.classList.remove('gr');
    })
    rec.forEach((btn2, l) => {
        if (l === n1 || l === n2 || l === n3) {
            btn2.classList.add('gr');
        }
    })
}

let sqrBurg = [...document.querySelectorAll('.dev-hero__sqr')]

function burgerControl2() {
    if (sqrBurg.length) {
        sqrBurg.forEach((btn) => {
            var rects = [...document.querySelectorAll('svg path')];
            setInterval(() => {
                changeColored2(rects)
            }, 1400);

        })
    }
}

burgerControl2();

//change colored sqr
//line indicator function

var lineInd = document.querySelector('.line-menu');
var headerMenu = [...document.querySelectorAll('.header-menu ul li')]
var headerMenRect = document.querySelector('.header-menu').getBoundingClientRect();
var brb = headerMenu[1].getBoundingClientRect();
var offset = headerMenRect.right - brb.right;

// console.log(offset);
function lineCur() {
    var cur = document.querySelector('.header-menu ul li.current-menu-item');
    var rightRect2 = cur.getBoundingClientRect().right;
    var width2 = cur.offsetWidth;
    var offSet2 = headerMenRect.right - rightRect2;
    if (cur) {
        lineInd.style.setProperty('--r', `${offSet2}px`);
        lineInd.style.setProperty('--w', `${width2}px`);

    } else {
        lineInd.style.setProperty('--r', `${0}px`);
        lineInd.style.setProperty('--w', `${0}px`);

    }
}

window.addEventListener('resize', () => {
    changeLinePos();
    headerMenRect = document.querySelector('.header-menu').getBoundingClientRect();
    brb = headerMenu[0].getBoundingClientRect();
    offset = headerMenRect.right - brb.right;
});

var classAnim = "animated";
var hoverBtns = document.querySelectorAll(".btn");
var hoverBtns_SPAN = [];

hoverBtns.forEach((element, index) => {
    var addAnimation = false;


    // If The span element for this element does not exist in the array, add it.
    if (!hoverBtns_SPAN[index])
        hoverBtns_SPAN[index] = element.querySelector("span");

    element.addEventListener("mouseover", e => {
        hoverBtns[index].style.setProperty('--x', `${e.clientX - element.getBoundingClientRect().left}px`);
        hoverBtns[index].style.setProperty('--y', `${e.clientY - element.getBoundingClientRect().top}px`);

        // Add an animation-class to animate via CSS.
        if (addAnimation) element.classList.add(classAnim);
    });

    element.addEventListener("mouseout", e => {
        hoverBtns[index].style.setProperty('--x', `${e.clientX - element.getBoundingClientRect().left}px`);
        hoverBtns[index].style.setProperty('--y', `${e.clientY - element.getBoundingClientRect().top}px`);
    });
});

function changeLinePos() {
    if (headerMenu.length) {

        lineCur();
        headerMenu.forEach((btn) => {
            var rightRect = btn.getBoundingClientRect().right;
            var width = btn.offsetWidth;
            var offSet = headerMenRect.right - rightRect;
            btn.addEventListener('mouseover', () => {
                lineInd.style.setProperty('--r', `${offSet}px`);
                lineInd.style.setProperty('--w', `${width}px`);

            })
            btn.addEventListener('mouseout', () => {
                lineCur();
            })
        })
    }
}

changeLinePos();


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

//typed
function ifGotTyped() {
    if (document.querySelector('.bg-typed pre.txt + pre')) {
        var typed = new Typed('.bg-typed pre.txt + pre', {
            strings: [`${document.querySelector('.bg-typed pre.txt').innerHTML}`],
            typeSpeed: 7,
            showCursor: false,
            startDelay: 200,
            loop: false,
        });
    }
}

ifGotTyped();

//typed

//click out work

var headWork = [...document.querySelectorAll('.single-our-work__head')];

function openWorkHead() {
    if (headWork.length) {
        headWork.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.single-our-work').classList.toggle('open');
            })
        })
    }
}

openWorkHead();

//click out work
//marquee
var marqueeContent = document.querySelector(".marquee-cont");

function marqqueFnc() {
    if (marqueeContent) {
        var root = document.documentElement;
        var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");


        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (var i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }
}

marqqueFnc();


//modals

//marquee


let startReview = [...document.querySelectorAll('.single-quiz')];
let backQuiz = [...document.querySelectorAll('.get-back-quiz')];
let reviewSteps = [...document.querySelectorAll('.review-step')];
let overQuiz = [...document.querySelectorAll('.btn--over-quiz')];
let reviewLine = [...document.querySelectorAll('.single-quiz-line')];

function starProcessReview() {
    if (startReview.length) {
        startReview.forEach((btn) => {
            let step = btn.closest('.review-step').dataset.step;
            let next = btn.closest('.review-step').dataset.next;

            btn.addEventListener('click', (e) => {
                if (next === 'end') {
                    let fromL = step - 1;
                    reviewLine[0].closest('.quiz-line').classList.add('done');
                    reviewLine[fromL].classList.add('done');
                    reviewLine[fromL].classList.remove('visible');

                } else {
                    let fromL = step - 1;
                    reviewLine[fromL].classList.add('done');
                    reviewLine[step].classList.add('visible');
                    reviewLine[fromL].classList.remove('visible');
                }
                // e.stopPropagation();
                // e.preventDefault();


                document.querySelector(`.review-step--${step}`).classList.remove('visible');
                document.querySelector(`.review-step--${next}`).classList.add('visible');


            })
        });
        overQuiz.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                btn.closest('.quiz-form').classList.add('hide');
                document.querySelector('.review-thanks').classList.add('visible');
            })
        });

        backQuiz.forEach((back) => {
            back.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let step = back.closest('.review-step').dataset.step;
                let prev = back.closest('.review-step').dataset.prev;
                reviewLine[0].closest('.quiz-line').classList.remove('done');
                reviewLine[prev - 1].classList.add('visible');
                document.querySelector(`.review-step--${step}`).classList.remove('visible');
                document.querySelector(`.review-step--${prev}`).classList.add('visible');

            })
        });
        reviewLine.forEach((btn2, k) => {
            btn2.addEventListener('click', () => {
                if (btn2.classList.contains('done')) {
                    reviewLine.forEach((btn3) => {
                        btn3.classList.remove('visible');
                    });
                    reviewSteps.forEach((btn4) => {
                        btn4.classList.remove('visible');
                    });
                    reviewSteps[k].classList.add('visible');
                    btn2.classList.add('visible');
                }
            })
        })
    }
}

starProcessReview();

let ourDateBlock = [...document.querySelectorAll('.date-js-format')];

function getCurrentDateFormat() {
    if (ourDateBlock.length) {
        ourDateBlock.forEach((btn) => {
            var dateObj = new Date();
            var month = dateObj.getUTCMonth() + 1; //months from 1-12
            var day = dateObj.getUTCDate();
            var year = dateObj.getUTCFullYear();
            let d = btn.querySelector('.djf-d');
            let m = btn.querySelector('.djf-m');
            let y = btn.querySelector('.djf-y');
            btn.innerHTML = dateObj.toLocaleDateString('pt-PT');
            // d.innerHTML = day;
            // m.innerHTML = month;
            // y.innerHTML = year;
        })
    }
}

getCurrentDateFormat();



