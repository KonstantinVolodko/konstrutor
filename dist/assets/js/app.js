import globalPrices from './prices.js';

document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    document.addEventListener("mousedown", function (e) {
        if (e.button === 2) {
            e.preventDefault();
        }
    });

    document.querySelectorAll('.product-info__content .btn_contact').forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.modal').classList.add('active');
        });
    });

    document.querySelectorAll('.modal .close').forEach(element => {
        element.addEventListener('click', function () {
            document.querySelector('.modal').classList.remove('active');
        });
    });

    document.querySelectorAll('.agree').forEach(element => {
        element.addEventListener('click', function () {
            this.classList.toggle('active');

            const modalBtn = document.querySelector('.modal form .btn');
            if (this.classList.contains('active')) {
                modalBtn.removeAttribute('disabled');
            } else {
                modalBtn.setAttribute('disabled', true);
            }
        });
    });

    if (document.querySelector('main').classList.contains('catalog-page')) {
        if (window.location.hash) {
            const targetElem = document.querySelector(window.location.hash);
            window.scroll({ top: targetElem.offsetTop, behavior: 'smooth' });
        }
    }

    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            window.location.reload();
        }
    });

    document.querySelector('.preload').classList.remove('leave');

    const clickableElements = 'a.logo, .footer__top ul a, .menu a, .cat a, .swiper a, .back, .header .menu ul li a, .interior__item, .accessories__item';
    document.querySelectorAll(clickableElements).forEach(element => {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.preload').classList.add('active');
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 700);
        });
    });


    document.querySelector('.burger').addEventListener('click', function () {
        document.querySelector('.burger').classList.add('active');
        document.querySelector('.menu').classList.add('active');
    });

    document.querySelector('.menu .close').addEventListener('click', function () {
        document.querySelector('.burger').classList.remove('active');
        document.querySelector('.menu').classList.remove('active');
    });

    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        if (document.querySelector('.wardrobes')) {
            if (window.scrollY > document.querySelector('.wardrobes').offsetTop - 350) {
                document.querySelector('.wardrobes').classList.add('active');
            } else {
                document.querySelector('.wardrobes').classList.remove('active');
            }
        }

        let st = window.scrollY;

        if (window.innerWidth > 760) {
            if (st > lastScrollTop) {
                if (window.scrollY > 250) {
                    document.querySelector('.header').classList.remove('white-bg');
                    document.querySelector('.header').classList.add('hide');
                } else {
                    document.querySelector('.header').classList.remove('hide');
                }
            } else {
                if (window.scrollY > 250) {
                    if (window.scrollY > window.innerHeight * 1.5) {
                        document.querySelector('.header').classList.add('white-bg');
                    }
                    document.querySelector('.header').classList.remove('hide');
                } else {
                    document.querySelector('.header').classList.remove('white-bg');
                    document.querySelector('.header').classList.remove('hide');
                }
            }
        } else if (window.innerWidth < 760) {
            if (st > lastScrollTop) {
                if (window.scrollY > 30) {
                    document.querySelector('.header').classList.remove('white-bg');
                    document.querySelector('.header').classList.add('hide');
                } else {
                    document.querySelector('.header').classList.remove('hide');
                }
            } else {
                if (window.scrollY > 30) {
                    if (window.scrollY > window.innerHeight * 1.5) {
                        document.querySelector('.header').classList.add('white-bg');
                    }
                    document.querySelector('.header').classList.remove('hide');
                } else {
                    document.querySelector('.header').classList.remove('white-bg');
                    document.querySelector('.header').classList.remove('hide');
                }
            }
        }

        lastScrollTop = st;
    });

    document.querySelectorAll('.number__item').forEach(element => {
        element.addEventListener('click', function () {
            this.classList.add('active');
            Array.from(this.parentNode.children).forEach(child => child.classList.remove('active'));

            let index = Array.from(this.parentNode.children).indexOf(this);
            document.querySelectorAll('.price span')[index].classList.add('active');
            Array.from(document.querySelectorAll('.price span')).forEach(span => span.classList.remove('active'));

            document.querySelectorAll('.product__slider')[index].classList.add('active');
            Array.from(document.querySelectorAll('.product__slider')).forEach(slider => slider.classList.remove('active'));
        });
    });

    document.querySelectorAll('.color__item').forEach(element => {
        element.addEventListener('click', function () {
            document.querySelectorAll('.product__slider').forEach(slider => slider.classList.add('color-pic'));
            this.classList.add('active');
            Array.from(this.parentNode.children).forEach(child => child.classList.remove('active'));

            let index = Array.from(this.parentNode.children).indexOf(this);
            document.querySelector('.modal form .hidden').value = index + 1;

            let activePrice = document.querySelector('.price .active');
            activePrice.textContent = parseInt(activePrice.getAttribute('price')) + parseInt(this.getAttribute('price'));

            document.querySelectorAll('.swiper-pagination').forEach(pagination => {
                pagination.children[index].click();
            });
        });
    });

























    const canvas = document.getElementById('tableCanvas');
    const ctx = canvas.getContext('2d');

    let ratio = window.devicePixelRatio || 0.5;

    ratio /= ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 0.5;

    canvas.width = 1021 * ratio;
    canvas.height = 573 * ratio;

    canvas.style.width = '102.1rem';
    canvas.style.height = '57.3rem';

    if (window.matchMedia("(max-width: 500px)").matches) {
        canvas.width = 350 * ratio;
        canvas.height = 194 * ratio;

        canvas.style.width = '35rem';
        canvas.style.height = '19.4rem';
    }

    // if (window.matchMedia("(max-width: 1300px)").matches) {
    //     canvas.width = 545 * ratio;
    //     canvas.height = 305 * ratio;

    //     canvas.style.width = '545px';
    //     canvas.style.height = '305px';
    // }

    // if (window.matchMedia("(max-width: 1150px)").matches) {
    //     canvas.width = 413 * ratio;
    //     canvas.height = 231 * ratio;

    //     canvas.style.width = '413px';
    //     canvas.style.height = '231px';
    // }

    // if (window.matchMedia("(max-width: 1024px)").matches) {
    //     canvas.width = 900 * ratio;
    //     canvas.height = 505 * ratio;

    //     canvas.style.width = '900px';
    //     canvas.style.height = '505px';
    // }

    // if (window.matchMedia("(max-width: 900px)").matches) {
    //     canvas.width = 600 * ratio;
    //     canvas.height = 336 * ratio;

    //     canvas.style.width = '600px';
    //     canvas.style.height = '336px';
    // }

    // if (window.matchMedia("(max-width: 600px)").matches) {
    //     canvas.width = 500 * ratio;
    //     canvas.height = 280 * ratio;

    //     canvas.style.width = '500px';
    //     canvas.style.height = '280px';
    // }

    // if (window.matchMedia("(max-width: 500px)").matches) {
    //     canvas.width = 400 * ratio;
    //     canvas.height = 224 * ratio;

    //     canvas.style.width = '400px';
    //     canvas.style.height = '224px';
    // }

    // if (window.matchMedia("(max-width: 400px)").matches) {
    //     canvas.width = 375 * ratio;
    //     canvas.height = 210 * ratio;

    //     canvas.style.width = '375px';
    //     canvas.style.height = '210px';
    // }


    ctx.imageSmoothingEnabled = true;

    if (document.querySelector('.--base .constructor__menu-container-checkbox span')) {
        document.querySelector('.--base .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.RAL_color} Р`
    }

    if (document.querySelector('.egger span')) {
        document.querySelector('.egger span').innerText = `+ ${globalPrices.LDSP_egger} Р`
    }

    if (document.querySelector('.ncs span')) {
        document.querySelector('.ncs span').innerText = `+ ${globalPrices.MDF_of_RAL_NCS} Р`
    }

    if (document.querySelector('.mdf span')) {
        document.querySelector('.mdf span').innerText = `+ ${globalPrices.MDF_shpon} Р`
    }

    if (document.querySelector('.--soundproofing-front .constructor__menu-container-checkbox span')) {
        document.querySelector('.--soundproofing-front .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.soundproofing_front} Р`
    }

    if (document.querySelector('.--soundproofing-side .constructor__menu-container-checkbox span')) {
        document.querySelector('.--soundproofing-side .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.soundproofing_side} Р`
    }

    if (document.querySelector('.--system-unit-suspension .constructor__menu-container-checkbox span')) {
        document.querySelector('.--system-unit-suspension .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.system_unit_suspension} Р`
    }

    if (document.querySelector('.--cable-channel-a .constructor__menu-container-checkbox span')) {
        document.querySelector('.--cable-channel-a .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.cable_channel_a} Р`
    }

    if (document.querySelector('.--cable-channel-b .constructor__menu-container-checkbox span')) {
        document.querySelector('.--cable-channel-b .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.cable_channel_b} Р`
    }

    if (document.querySelector('.--cable-tray .constructor__menu-container-checkbox span')) {
        document.querySelector('.--cable-tray .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.cable_tray} Р`
    }

    if (document.querySelector('.--cutout-for-wires .constructor__menu-container-checkbox span')) {
        document.querySelector('.--cutout-for-wires .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.cutout_for_wires} Р`
    }

    if (document.querySelector('.--socket-block .constructor__menu-container-checkbox span')) {
        document.querySelector('.--socket-block .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.socket_block} Р`
    }

    if (document.querySelector('.--wireless-charger .constructor__menu-container-checkbox span')) {
        document.querySelector('.--wireless-charger .constructor__menu-container-checkbox span').innerText = `+ ${globalPrices.wireless_charger} Р`
    }


    let selectedBaseImageKey = null;
    let systemUnitSuspensionEnabled = false;
    let selectedTableTopImageKey = null;
    let selectedSoundproofingFrontImageKey = null;
    let selectedSoundproofingSideImageKey = null;
    let selectedSystemUnitSuspensionImageKey = null;
    let cableTrayImageKey = null;
    let cableTrayEnabled = false;
    let selectedCableChannelAImageKey = null;
    let selectedCableChannelBImageKey = null
    let socketBlockEnabled = false;
    let currentTotalPrice = 0;
    let currentBasePrice = 0;



    const images = {
        baseArtWhite: { src: './assets/images/art/white/base.png', image: new Image() },
        baseArtLightGray: { src: './assets/images/art/light-gray/base.png', image: new Image() },
        baseArtDarkGray: { src: './assets/images/art/dark-gray/base.png', image: new Image() },
        baseArtBlack: { src: './assets/images/art/black/base.png', image: new Image() },

        baseCvantWhite: { src: './assets/images/cvant/white/base.png', image: new Image() },
        baseCvantBlack: { src: './assets/images/cvant/black/base.png', image: new Image() },

        baseContourAWhite: { src: './assets/images/contour_a/white/base.png', image: new Image() },
        baseContourALightGray: { src: './assets/images/contour_a/light-gray/base.png', image: new Image() },
        baseContourADarkGray: { src: './assets/images/contour_a/dark-gray/base.png', image: new Image() },
        baseContourABlack: { src: './assets/images/contour_a/black/base.png', image: new Image() },

        baseContourOWhite: { src: './assets/images/contour_o/white/base.png', image: new Image() },
        baseContourOLightGray: { src: './assets/images/contour_o/light-gray/base.png', image: new Image() },
        baseContourODarkGray: { src: './assets/images/contour_o/dark-gray/base.png', image: new Image() },
        baseContourOBlack: { src: './assets/images/contour_o/black/base.png', image: new Image() },

        baseContourPWhite: { src: './assets/images/contour_p/white/base.png', image: new Image() },
        baseContourPLightGray: { src: './assets/images/contour_p/light-gray/base.png', image: new Image() },
        baseContourPDarkGray: { src: './assets/images/contour_p/dark-gray/base.png', image: new Image() },
        baseContourPBlack: { src: './assets/images/contour_p/black/base.png', image: new Image() },

        baseEcoWhite: { src: './assets/images/eco/white/base.png', image: new Image() },
        baseEcoLightGray: { src: './assets/images/eco/light-gray/base.png', image: new Image() },
        baseEcoDarkGray: { src: './assets/images/eco/dark-gray/base.png', image: new Image() },
        baseEcoBlack: { src: './assets/images/eco/black/base.png', image: new Image() },

        cableChannelALightGray: { src: './assets/images/cable-channel-a/regular/light-gray/cable-channel.png', image: new Image() },
        cableChannelADarkGray: { src: './assets/images/cable-channel-a/regular/dark-gray/cable-channel.png', image: new Image() },
        cableChannelABlack: { src: './assets/images/cable-channel-a/regular/black/cable-channel.png', image: new Image() },

        cableChannelBLightGray: { src: './assets/images/cable-channel-b/regular/light-gray/cable-channel.png', image: new Image() },
        cableChannelBDarkGray: { src: './assets/images/cable-channel-b/regular/dark-gray/cable-channel.png', image: new Image() },
        cableChannelBBlack: { src: './assets/images/cable-channel-b/regular/black/cable-channel.png', image: new Image() },

        cableChannelAForCvantLightGray: { src: './assets/images/cable-channel-a/forCvant/light-gray/cable-channel.png', image: new Image() },
        cableChannelAForCvantDarkGray: { src: './assets/images/cable-channel-a/forCvant/dark-gray/cable-channel.png', image: new Image() },
        cableChannelAForCvantBlack: { src: './assets/images/cable-channel-a/forCvant/black/cable-channel.png', image: new Image() },

        cableChannelBForCvantLightGray: { src: './assets/images/cable-channel-b/forCvant/light-gray/cable-channel.png', image: new Image() },
        cableChannelBForCvantDarkGray: { src: './assets/images/cable-channel-b/forCvant/dark-gray/cable-channel.png', image: new Image() },
        cableChannelBForCvantBlack: { src: './assets/images/cable-channel-b/forCvant/black/cable-channel.png', image: new Image() },

        cableChannelAForArtLightGray: { src: './assets/images/cable-channel-a/forArt/light-gray/cable-channel.png', image: new Image() },
        cableChannelAForArtDarkGray: { src: './assets/images/cable-channel-a/forArt/dark-gray/cable-channel.png', image: new Image() },
        cableChannelAForArtBlack: { src: './assets/images/cable-channel-a/forArt/black/cable-channel.png', image: new Image() },

        cableChannelBForArtLightGray: { src: './assets/images/cable-channel-b/forArt/light-gray/cable-channel.png', image: new Image() },
        cableChannelBForArtDarkGray: { src: './assets/images/cable-channel-b/forArt/dark-gray/cable-channel.png', image: new Image() },
        cableChannelBForArtBlack: { src: './assets/images/cable-channel-b/forArt/black/cable-channel.png', image: new Image() },


        cableTrayForArtLightGray: { src: './assets/images/cable-tray/forArt/light-gray/cable-tray.png', image: new Image() },
        cableTrayForArtDarkGray: { src: './assets/images/cable-tray/forArt/dark-gray/cable-tray.png', image: new Image() },
        cableTrayForArtBlack: { src: './assets/images/cable-tray/forArt/black/cable-tray.png', image: new Image() },

        cableTrayForCvantLightGray: { src: './assets/images/cable-tray/forCvant/light-gray/cable-tray.png', image: new Image() },
        cableTrayForCvantDarkGray: { src: './assets/images/cable-tray/forCvant/dark-gray/cable-tray.png', image: new Image() },
        cableTrayForCvantBlack: { src: './assets/images/cable-tray/forCvant/black/cable-tray.png', image: new Image() },

        cableTrayRegularLightGray: { src: './assets/images/cable-tray/regular/light-gray/cable-tray.png', image: new Image() },
        cableTrayRegularDarkGray: { src: './assets/images/cable-tray/regular/dark-gray/cable-tray.png', image: new Image() },
        cableTrayRegularBlack: { src: './assets/images/cable-tray/regular/black/cable-tray.png', image: new Image() },

        cutoutForWires: { src: './assets/images/cutout-for-wires/cutout-for-wires.png', image: new Image() },
        socketBlock: { src: './assets/images/socket-block/socket-block.png', image: new Image() },

        soundproofingScreenFrontLightGray: { src: './assets/images/soundproofing-screen-front/light-gray/soundproofing-screen-front.png', image: new Image() },
        soundproofingScreenFrontDarkGray: { src: './assets/images/soundproofing-screen-front/dark-gray/soundproofing-screen-front.png', image: new Image() },
        soundproofingScreenFrontBeige: { src: './assets/images/soundproofing-screen-front/beige/soundproofing-screen-front.png', image: new Image() },
        soundproofingScreenFrontBlue: { src: './assets/images/soundproofing-screen-front/blue/soundproofing-screen-front.png', image: new Image() },
        soundproofingScreenFrontBrown: { src: './assets/images/soundproofing-screen-front/brown/soundproofing-screen-front.png', image: new Image() },
        soundproofingScreenFrontGreen: { src: './assets/images/soundproofing-screen-front/green/soundproofing-screen-front.png', image: new Image() },
        soundproofingScreenFrontRed: { src: './assets/images/soundproofing-screen-front/red/soundproofing-screen-front.png', image: new Image() },

        soundproofingScreenSideLightGray: { src: './assets/images/soundproofing-screen-side/light-gray/soundproofing-screen-side.png', image: new Image() },
        soundproofingScreenSideDarkGray: { src: './assets/images/soundproofing-screen-side/dark-gray/soundproofing-screen-side.png', image: new Image() },
        soundproofingScreenSideBeige: { src: './assets/images/soundproofing-screen-side/beige/soundproofing-screen-side.png', image: new Image() },
        soundproofingScreenSideBlue: { src: './assets/images/soundproofing-screen-side/blue/soundproofing-screen-side.png', image: new Image() },
        soundproofingScreenSideBrown: { src: './assets/images/soundproofing-screen-side/brown/soundproofing-screen-side.png', image: new Image() },
        soundproofingScreenSideGreen: { src: './assets/images/soundproofing-screen-side/green/soundproofing-screen-side.png', image: new Image() },
        soundproofingScreenSideRed: { src: './assets/images/soundproofing-screen-side/red/soundproofing-screen-side.png', image: new Image() },

        systemUnitSuspensionForArtLightGray: { src: './assets/images/system-unit-suspension/forArt/light-gray/system-unit-suspension.png', image: new Image() },
        systemUnitSuspensionForArtDarkGray: { src: './assets/images/system-unit-suspension/forArt/dark-gray/system-unit-suspension.png', image: new Image() },
        systemUnitSuspensionForArtBlack: { src: './assets/images/system-unit-suspension/forArt/black/system-unit-suspension.png', image: new Image() },

        systemUnitSuspensionForCvantLightGray: { src: './assets/images/system-unit-suspension/forCvant/light-gray/system-unit-suspension.png', image: new Image() },
        systemUnitSuspensionForCvantDarkGray: { src: './assets/images/system-unit-suspension/forCvant/dark-gray/system-unit-suspension.png', image: new Image() },
        systemUnitSuspensionForCvantBlack: { src: './assets/images/system-unit-suspension/forCvant/black/system-unit-suspension.png', image: new Image() },

        systemUnitSuspensionRegularLightGray: { src: './assets/images/system-unit-suspension/regular/light-gray/system-unit-suspension.png', image: new Image() },
        systemUnitSuspensionRegularDarkGray: { src: './assets/images/system-unit-suspension/regular/dark-gray/system-unit-suspension.png', image: new Image() },
        systemUnitSuspensionRegularBlack: { src: './assets/images/system-unit-suspension/regular/black/system-unit-suspension.png', image: new Image() },

        tableTopWhite: { src: './assets/images/table-top/white/table-top.png', image: new Image() },
        tableTopLightGray: { src: './assets/images/table-top/light-gray/table-top.png', image: new Image() },
        tableTopDarkGray: { src: './assets/images/table-top/dark-gray/table-top.png', image: new Image() },
        tableTopBeige: { src: './assets/images/table-top/beige/table-top.png', image: new Image() },
        tableTopBrown: { src: './assets/images/table-top/brown/table-top.png', image: new Image() },
    };

    const mapping = {
        'contour_p': {
            '--white': 'baseContourPWhite',
            '--light-gray': 'baseContourPLightGray',
            '--dark-gray': 'baseContourPDarkGray',
            '--black': 'baseContourPBlack',
            price: globalPrices.contour_p
        },
        'eco': {
            '--white': 'baseEcoWhite',
            '--light-gray': 'baseEcoLightGray',
            '--dark-gray': 'baseEcoDarkGray',
            '--black': 'baseEcoBlack',
            price: globalPrices.eco
        },
        'art': {
            '--white': 'baseArtWhite',
            '--light-gray': 'baseArtLightGray',
            '--dark-gray': 'baseArtDarkGray',
            '--black': 'baseArtBlack',
            price: globalPrices.art
        },
        'contour_a': {
            '--white': 'baseContourAWhite',
            '--light-gray': 'baseContourALightGray',
            '--dark-gray': 'baseContourADarkGray',
            '--black': 'baseContourABlack',
            price: globalPrices.contour_a
        },
        'contour_o': {
            '--white': 'baseContourOWhite',
            '--light-gray': 'baseContourOLightGray',
            '--dark-gray': 'baseContourODarkGray',
            '--black': 'baseContourOBlack',
            price: globalPrices.contour_o
        },
        'cvant': {
            '--white': 'baseCvantWhite',
            '--light-gray': 'baseCvantLightGray',
            '--dark-gray': 'baseCvantDarkGray',
            '--black': 'baseCvantBlack',
            price: globalPrices.cvant
        },
        'default': '--white'
    };

    const soundproofingFrontMapping = {
        '--light-gray': 'soundproofingScreenFrontLightGray',
        '--dark-gray': 'soundproofingScreenFrontDarkGray',
        '--beige': 'soundproofingScreenFrontBeige',
        '--brown': 'soundproofingScreenFrontBrown',
        '--red': 'soundproofingScreenFrontRed',
        '--blue': 'soundproofingScreenFrontBlue',
        '--green': 'soundproofingScreenFrontGreen',
    };

    const soundproofingSideMapping = {
        '--light-gray': 'soundproofingScreenSideLightGray',
        '--dark-gray': 'soundproofingScreenSideDarkGray',
        '--beige': 'soundproofingScreenSideBeige',
        '--brown': 'soundproofingScreenSideBrown',
        '--red': 'soundproofingScreenSideRed',
        '--blue': 'soundproofingScreenSideBlue',
        '--green': 'soundproofingScreenSideGreen',
    };


    const tableTopMapping = {
        '--white': 'tableTopWhite',
        '--light-gray': 'tableTopLightGray',
        '--dark-gray': 'tableTopDarkGray',
        '--beige': 'tableTopBeige',
        '--brown': 'tableTopBrown',
    };

    const cableChannelAMapping = {
        'regular': {
            '--light-gray': 'cableChannelALightGray',
            '--dark-gray': 'cableChannelADarkGray',
            '--black': 'cableChannelABlack',
        },
        'cvant': {
            '--light-gray': 'cableChannelAForCvantLightGray',
            '--dark-gray': 'cableChannelAForCvantDarkGray',
            '--black': 'cableChannelAForCvantBlack',
        },
        'art': {
            '--light-gray': 'cableChannelAForArtLightGray',
            '--dark-gray': 'cableChannelAForArtDarkGray',
            '--black': 'cableChannelAForArtBlack',
        }
    };

    const cableChannelBMapping = {
        'regular': {
            '--light-gray': 'cableChannelBLightGray',
            '--dark-gray': 'cableChannelBDarkGray',
            '--black': 'cableChannelBBlack',
        },
        'cvant': {
            '--light-gray': 'cableChannelBForCvantLightGray',
            '--dark-gray': 'cableChannelBForCvantDarkGray',
            '--black': 'cableChannelBForCvantBlack',
        },
        'art': {
            '--light-gray': 'cableChannelBForArtLightGray',
            '--dark-gray': 'cableChannelBForArtDarkGray',
            '--black': 'cableChannelBForArtBlack',
        }
    };

    const baseCableTrayMapping = {
        'regular': {
            '--light-gray': 'cableTrayRegularLightGray',
            '--dark-gray': 'cableTrayRegularDarkGray',
            '--black': 'cableTrayRegularBlack',
        },
        'art': {
            '--light-gray': 'cableTrayForArtLightGray',
            '--dark-gray': 'cableTrayForArtDarkGray',
            '--black': 'cableTrayForArtBlack',
        },
        'cvant': {
            '--light-gray': 'cableTrayForCvantLightGray',
            '--dark-gray': 'cableTrayForCvantDarkGray',
            '--black': 'cableTrayForCvantBlack',
        },
    };

    const baseSystemUnitSuspensionMapping = {
        'regular': {
            '--light-gray': 'systemUnitSuspensionRegularLightGray',
            '--dark-gray': 'systemUnitSuspensionRegularDarkGray',
            '--black': 'systemUnitSuspensionRegularBlack',
        },

        'art': {
            '--light-gray': 'systemUnitSuspensionForArtLightGray',
            '--dark-gray': 'systemUnitSuspensionForArtDarkGray',
            '--black': 'systemUnitSuspensionForArtBlack',
        },

        'cvant': {
            '--light-gray': 'systemUnitSuspensionForCvantLightGray',
            '--dark-gray': 'systemUnitSuspensionForCvantDarkGray',
            '--black': 'systemUnitSuspensionForCvantBlack',
        },
    };


    function redrawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // рисуем базовое изображение
        if (selectedBaseImageKey && images[selectedBaseImageKey]) {
            ctx.drawImage(images[selectedBaseImageKey].image, 0, 0, canvas.width, canvas.height);
        }

        // рисуем изображение столешницы
        if (selectedTableTopImageKey && images[selectedTableTopImageKey]) {
            ctx.drawImage(images[selectedTableTopImageKey].image, 0, 0, canvas.width, canvas.height);
        }

        // рисуем изображение шумоизоляции спереди
        if (selectedSoundproofingFrontImageKey && images[selectedSoundproofingFrontImageKey]) {
            ctx.drawImage(images[selectedSoundproofingFrontImageKey].image, 0, 0, canvas.width, canvas.height);
        }

        // рисуем изображение шумоизоляции сбоку
        if (selectedSoundproofingSideImageKey && images[selectedSoundproofingSideImageKey]) {
            ctx.drawImage(images[selectedSoundproofingSideImageKey].image, 0, 0, canvas.width, canvas.height);
        }

        if (selectedSystemUnitSuspensionImageKey && images[selectedSystemUnitSuspensionImageKey]) {
            ctx.drawImage(images[selectedSystemUnitSuspensionImageKey].image, 0, 0, canvas.width, canvas.height);
        }

        if (cableTrayImageKey && images[cableTrayImageKey]) {
            ctx.drawImage(images[cableTrayImageKey].image, 0, 0, canvas.width, canvas.height);
        }


        if (socketBlockEnabled && images['socketBlock']) {
            ctx.drawImage(images['socketBlock'].image, 0, 0, canvas.width, canvas.height);
        }

        if (selectedCableChannelAImageKey && images[selectedCableChannelAImageKey]) {
            ctx.drawImage(images[selectedCableChannelAImageKey].image, 0, 0, canvas.width, canvas.height);
        }

        if (selectedCableChannelBImageKey && images[selectedCableChannelBImageKey]) {
            ctx.drawImage(images[selectedCableChannelBImageKey].image, 0, 0, canvas.width, canvas.height);
        }
    }

    let loadedImagesCount = 0;

    for (let key in images) {
        images[key].image.onload = function () {
            loadedImagesCount++;
            if (loadedImagesCount === Object.keys(images).length) {
                initializeListeners(); // Инициализируем слушатели после загрузки всех изображений
                document.querySelector('.--base .constructor__menu-container-buttons button').click()
                document.querySelector('.--table-top .constructor__menu-container-colors button').click()
            }
        }
        images[key].image.onerror = function () {
            console.error(`Ошибка при загрузке изображения: ${images[key].src}`);
        }
        images[key].image.src = images[key].src;
    }

    function animateValue(start, end, duration, element) {
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            let timeElapsed = currentTime - startTime;

            let progress = Math.min(timeElapsed / duration, 1);
            let value = start + (end - start) * progress;

            element.textContent = Math.round(value).toString();

            if (progress < 1) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    function updateTotalPrice() {
        const element = document.querySelector(".final-price__container div span");
        const startValue = parseInt(element.textContent, 10) || 0;

        animateValue(startValue, currentTotalPrice, 500, element); // 500 миллисекунд для анимации
    }

    let selectedBase2;


    function initializeListeners() {
        let selectedBase;

        const baseInput = document.getElementById("base");
        const baseColorInput = document.getElementById("base-color");
        const lightGrayButton = document.querySelector('.--base .constructor__menu-container-color-btns .--light-gray');
        const darkGrayButton = document.querySelector('.--base .constructor__menu-container-color-btns .--dark-gray');

        document.querySelectorAll('.--base .constructor__menu-container-buttons button').forEach(base => {
            base.addEventListener('click', function () {


                if (selectedBase) {
                    document.querySelector(`.${selectedBase}`).classList.remove('--active');
                }

                const baseKey = this.className;

                if (baseKey.includes('cvant')) {
                    lightGrayButton.style.display = 'none';
                    darkGrayButton.style.display = 'none';
                } else {
                    lightGrayButton.style.display = 'block';
                    darkGrayButton.style.display = 'block';
                }

                const basePrice = parseInt(mapping[baseKey].price, 10);
                const previousBasePrice = currentBasePrice;
                currentBasePrice = basePrice + globalPrices.table_top;
                currentTotalPrice += (currentBasePrice - previousBasePrice); // Добавляем разницу в цену
                updateTotalPrice();

                selectedBase = this.className; // сохраняем выбранную основу
                this.classList.add('--active');


                selectedBase2 = this.dataset.baseKey;
                baseInput.value = this.value; // Устанавливаем значение кнопки в input с id="base"


                const cableTrayCheckbox = document.querySelector('.--cable-tray .custom-checkbox');
                if (cableTrayCheckbox && cableTrayCheckbox.checked) {
                    // Если чекбокс включен, обновляем картинку для кабельного лотка
                    const cableTrayColorButton = document.querySelector('.--cable-tray .constructor__menu-container-color-btns .--light-gray');
                    if (cableTrayColorButton) {
                        cableTrayColorButton.click();
                    }
                }

                const systemUnitSuspensionCheckbox = document.querySelector('.--system-unit-suspension .custom-checkbox');
                if (systemUnitSuspensionCheckbox && systemUnitSuspensionCheckbox.checked) {
                    // Если чекбокс включен, обновляем картинку для кабельного лотка
                    const systemUnitSuspensionColorButton = document.querySelector('.--system-unit-suspension .constructor__menu-container-color-btns button');
                    if (systemUnitSuspensionColorButton) {
                        systemUnitSuspensionColorButton.click();
                    }
                }

                const cableChannelACheckbox = document.querySelector('.--cable-channel-a .custom-checkbox');
                if (cableChannelACheckbox && cableChannelACheckbox.checked) {
                    // Если чекбокс включен, обновляем картинку для кабельного лотка
                    const cableChannelACheckboxColorButton = document.querySelector('.--cable-channel-a .constructor__menu-container-color-btns button');
                    if (cableChannelACheckboxColorButton) {
                        cableChannelACheckboxColorButton.click();
                    }
                }

                const cableChannelBCheckbox = document.querySelector('.--cable-channel-b .custom-checkbox');
                if (cableChannelBCheckbox && cableChannelBCheckbox.checked) {
                    // Если чекбокс включен, обновляем картинку для кабельного лотка
                    const cableChannelBCheckboxColorButton = document.querySelector('.--cable-channel-b .constructor__menu-container-color-btns button');
                    if (cableChannelBCheckboxColorButton) {
                        cableChannelBCheckboxColorButton.click();
                    }
                }

                // Нажимаем на --light-gray для выбранной основы
                const nextColorsContainer = this.parentElement.nextElementSibling.querySelector('.--base .constructor__menu-container-color-btns .--white');
                if (nextColorsContainer) {
                    nextColorsContainer.click()
                }

                updateCableChannelImages(selectedBase2);
            });
        });

        document.querySelectorAll('.--base .constructor__menu-container-color-btns button').forEach(color => {
            color.addEventListener('click', function () {
                if (selectedBase) {
                    const colorClass = this.className;
                    const mappedImageKey = mapping[selectedBase][colorClass];
                    if (mappedImageKey) {
                        selectedBaseImageKey = mappedImageKey;
                        redrawCanvas();
                    }

                    baseColorInput.value = this.value; // Устанавливаем значение цвета в input с id="base-color"
                }
            });
        });

        const baseRalColorInput = document.getElementById("base-ral-color"); // Получаем ссылку на input с id="base-ral-color"

        // Обработчик события для чекбокса
        document.querySelector('.constructor__menu-container-checkbox .custom-checkbox').addEventListener('change', function () {
            if (this.checked) {
                baseRalColorInput.value = "+"; // Устанавливаем + в input, если чекбокс отмечен
                currentTotalPrice += globalPrices.RAL_color
                updateTotalPrice()
            } else {
                baseRalColorInput.value = ""; // Очищаем input, если чекбокс снят
                currentTotalPrice -= globalPrices.RAL_color
                updateTotalPrice()
            }
        });


    }

   

    function getCableTrayImageKey(base, color) {
        if (base === 'cvant') {
            return `cableTrayForCvant${color}`;
        } else if (base === 'art') {
            return `cableTrayForArt${color}`;
        } else {
            return `cableTrayRegular${color}`;
        }
    }

    const tableTopColorInput = document.getElementById("table-top-color"); // Ссылка на input с id="table-top-color"

    document.querySelectorAll('.constructor__menu-container.--table-top .constructor__menu-container-color-btns button').forEach(color => {
        color.addEventListener('click', function () {
            const colorValue = this.value; // Получаем value кнопки
            tableTopColorInput.value = colorValue; // Устанавливаем значение для #table-top-color
            // Ваш существующий код
            const colorClass = this.className;
            const mappedTableTopImageKey = tableTopMapping[colorClass];
            if (mappedTableTopImageKey) {
                selectedTableTopImageKey = mappedTableTopImageKey;
                redrawCanvas();
            }
        });
    });



    document.querySelectorAll('.constructor__menu-container-helper input[type="checkbox"]').forEach(input => {
        input.addEventListener('change', function () {
            const nextColorBlock = this.closest('.constructor__menu-container-colors').nextElementSibling;
            if (nextColorBlock) {
                nextColorBlock.classList.toggle('--disabled', !this.checked);
            }
        });
    });

    document.querySelector('.--soundproofing-front .custom-checkbox').addEventListener('change', function () {
        const colorsContainer = this.closest('.constructor__menu-container-helper');
        const soundproofingFront = document.getElementById('soundproofing-screen-front');
        const soundproofingFrontColor = document.getElementById('soundproofing-screen-front-color');

        if (this.checked && colorsContainer) {
            colorsContainer.classList.remove('--disabled');
            const lightGrayColor = colorsContainer.querySelector('button.--light-gray');
            lightGrayColor.click();
            soundproofingFront.value = "+";
            currentTotalPrice += globalPrices.soundproofing_front
            updateTotalPrice()
        } else {
            soundproofingFront.value = "";
            currentTotalPrice -= globalPrices.soundproofing_front
            updateTotalPrice()
            soundproofingFrontColor.value = "";
            selectedSoundproofingFrontImageKey = null;
            redrawCanvas();
            colorsContainer.classList.add('--disabled');
        }
    });

    document.querySelectorAll('.--soundproofing-front .constructor__menu-container-color-btns button').forEach(color => {
        color.addEventListener('click', function () {
            const colorClass = this.className;
            const mappedImageKey = soundproofingFrontMapping[colorClass];

            if (mappedImageKey) {
                selectedSoundproofingFrontImageKey = mappedImageKey;
                redrawCanvas();
                document.getElementById('soundproofing-screen-front-color').value = this.value;
            }
        });
    });

    // Обработчик для шумоизоляционного экрана бокового
    document.querySelector('.--soundproofing-side .custom-checkbox').addEventListener('change', function () {
        const colorsContainer = this.closest('.constructor__menu-container-helper');
        const soundproofingSide = document.getElementById('soundproofing-screen-side');
        const soundproofingSideColor = document.getElementById('soundproofing-screen-side-color');

        if (this.checked && colorsContainer) {
            colorsContainer.classList.remove('--disabled');
            const lightGrayColor = colorsContainer.querySelector('button.--light-gray');
            lightGrayColor.click();
            soundproofingSide.value = "+";
            currentTotalPrice += globalPrices.soundproofing_side
            updateTotalPrice()
        } else {
            soundproofingSide.value = "";
            currentTotalPrice -= globalPrices.soundproofing_side
            updateTotalPrice()
            soundproofingSideColor.value = "";
            selectedSoundproofingSideImageKey = null;
            redrawCanvas();
            colorsContainer.classList.add('--disabled');
        }
    });

    document.querySelectorAll('.--soundproofing-side .constructor__menu-container-color-btns button').forEach(color => {
        color.addEventListener('click', function () {
            const colorClass = this.className;
            const mappedImageKey = soundproofingSideMapping[colorClass];

            if (mappedImageKey) {
                selectedSoundproofingSideImageKey = mappedImageKey;
                redrawCanvas();
                document.getElementById('soundproofing-screen-side-color').value = this.value;
            }
        });
    });




    document.querySelector('.--system-unit-suspension .custom-checkbox').addEventListener('change', function () {
        const colorsContainer = this.closest('.constructor__menu-container-helper');
        const systemUnitSuspension = document.getElementById('system-unit-suspension');
        const systemUnitSuspensionColor = document.getElementById('system-unit-suspension-color');

        if (this.checked && colorsContainer) {
            colorsContainer.classList.remove('--disabled');
            const lightGrayColor = colorsContainer.querySelector('button.--light-gray');
            lightGrayColor.click();
            systemUnitSuspension.value = "+";
            currentTotalPrice += globalPrices.system_unit_suspension
            updateTotalPrice()
        } else {
            systemUnitSuspension.value = "";
            currentTotalPrice -= globalPrices.system_unit_suspension
            updateTotalPrice()
            systemUnitSuspensionColor.value = "";
            selectedSystemUnitSuspensionImageKey = null;
            redrawCanvas();
            colorsContainer.classList.add('--disabled');
        }
    });



    document.querySelectorAll('.--system-unit-suspension .constructor__menu-container-color-btns button').forEach(color => {
        color.addEventListener('click', function () {
            const colorClass = this.className;

            const baseSpecificMapping = baseSystemUnitSuspensionMapping[selectedBase2] || baseSystemUnitSuspensionMapping['regular'];
            const mappedImageKey = baseSpecificMapping[colorClass];

            if (mappedImageKey) {
                selectedSystemUnitSuspensionImageKey = mappedImageKey;
                redrawCanvas();
                document.getElementById('system-unit-suspension-color').value = this.value;
            }
        });
    });



    document.querySelector('.--cable-tray .custom-checkbox').addEventListener('change', function () {
        const colorsContainer = this.closest('.constructor__menu-container-helper');
        const cableTray = document.getElementById('cable-tray');
        const cableTrayColor = document.getElementById('cable-tray-color');

        if (this.checked && colorsContainer) {
            colorsContainer.classList.remove('--disabled');
            const lightGrayColor = colorsContainer.querySelector('button.--light-gray');
            lightGrayColor.click();
            cableTray.value = "+";
            currentTotalPrice += globalPrices.cable_tray
            updateTotalPrice()
        } else {
            cableTray.value = "";
            currentTotalPrice -= globalPrices.cable_tray
            updateTotalPrice()
            cableTrayColor.value = "";
            cableTrayImageKey = null;
            redrawCanvas();
            colorsContainer.classList.add('--disabled');
        }
    });

    document.querySelectorAll('.--cable-tray .constructor__menu-container-color-btns button').forEach(color => {
        color.addEventListener('click', function () {
            const colorClass = this.className;

            const baseSpecificMapping = baseCableTrayMapping[selectedBase2] || baseCableTrayMapping['regular'];
            const mappedImageKey = baseSpecificMapping[colorClass];

            if (mappedImageKey) {
                cableTrayImageKey = mappedImageKey;
                redrawCanvas();
                document.getElementById('cable-tray-color').value = this.value;
            }
        });
    });



    const cutoutForWiresCheckbox = document.querySelector('.constructor__menu-container-helper.--cutout-for-wires .custom-checkbox');
    const cutoutForWiresField = document.getElementById('cutout-for-wires');

    cutoutForWiresCheckbox.addEventListener('change', function () {
        if (this.checked) {
            cutoutForWiresField.value = "+";  // Устанавливаем текстовое значение "+" в поле
            currentTotalPrice += globalPrices.cutout_for_wires
            updateTotalPrice()
        } else {
            cutoutForWiresField.value = "";  // Очищаем текстовое значение поля
            currentTotalPrice -= globalPrices.cutout_for_wires
            updateTotalPrice()
        }
    });

    const socketBlockCheckbox = document.querySelector('.constructor__menu-container-helper.--socket-block .custom-checkbox');
    const socketBlockField = document.getElementById('socket-block');

    socketBlockCheckbox.addEventListener('change', function () {
        if (this.checked) {
            socketBlockEnabled = true;
            socketBlockField.value = "+"
            currentTotalPrice += globalPrices.socket_block
            updateTotalPrice()
        } else {
            socketBlockEnabled = false;
            socketBlockField.value = ""
            currentTotalPrice -= globalPrices.socket_block
            updateTotalPrice()
        }
        redrawCanvas();
    });

    const wirelessChargerCheckbox = document.querySelector('.constructor__menu-container-helper.--wireless-charger .custom-checkbox');
    const wirelessChargerField = document.getElementById('wireless-charger');

    wirelessChargerCheckbox.addEventListener('change', function () {
        wirelessChargerField.value = this.checked ? "+" : "";
        currentTotalPrice += this.checked ? globalPrices.wireless_charger : -globalPrices.wireless_charger;
        updateTotalPrice();
    });


























    function initializeCableChannels() {
        let isCableOrganizerAdded = false;
        let cableChannelColors = document.querySelector('.--cable-channel-b').nextElementSibling;
    
        document.querySelectorAll('.--cable-channels input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    cableChannelColors.classList.remove('--disabled');
                    if (this.id === 'cable-channel-a-input') {
                        uncheckOther('cable-channel-b-input');
                        updateCableChannelImages(selectedBase2);
                    } else if (this.id === 'cable-channel-b-input') {
                        uncheckOther('cable-channel-a-input');
                        updateCableChannelImages(selectedBase2);
                    }
                } else {
                    cableChannelColors.classList.add('--disabled');
                    if (this.id === 'cable-channel-a-input') {
                        selectedCableChannelAImageKey = null;
                    } else if (this.id === 'cable-channel-b-input') {
                        selectedCableChannelBImageKey = null;
                    }
                }
    
                const isChecked = document.getElementById('cable-channel-a-input').checked || document.getElementById('cable-channel-b-input').checked;
                if (isChecked && !isCableOrganizerAdded) {
                    currentTotalPrice += globalPrices.cable_channel_a; // Add the price
                    isCableOrganizerAdded = true;
                } else if (!isChecked && isCableOrganizerAdded) {
                    currentTotalPrice -= globalPrices.cable_channel_a; // Remove the price
                    isCableOrganizerAdded = false;
                }
                updateTotalPrice();
            });
        });
    
        document.querySelectorAll('.--cable-channels .constructor__menu-container-color-btns button').forEach(button => {
            button.addEventListener('click', function () {
                const colorClass = this.className;
                if (document.getElementById('cable-channel-a-input').checked) {
                    selectedCableChannelAImageKey = getCableChannelImageKey('a', colorClass, selectedBase2);
                } else if (document.getElementById('cable-channel-b-input').checked) {
                    selectedCableChannelBImageKey = getCableChannelImageKey('b', colorClass, selectedBase2);
                }
                redrawCanvas();
            });
        });
    }

    function uncheckOther(checkboxId) {
        const otherCheckbox = document.getElementById(checkboxId);
        if (otherCheckbox && otherCheckbox.checked) {
            otherCheckbox.checked = false;
            if (checkboxId === 'cable-channel-a-input') {
                selectedCableChannelAImageKey = null;
            } else if (checkboxId === 'cable-channel-b-input') {
                selectedCableChannelBImageKey = null;
            }
        }
    }


    

    function getCableChannelImageKey(channel, colorClass) {
        let baseKey = selectedBase2; // 'selectedBase2' должен содержать ключ выбранной основы, например 'regular', 'cvant', 'art'

        // Проверяем, существует ли маппинг для данной основы
        if (channel === 'a' && cableChannelAMapping[baseKey]) {
            return cableChannelAMapping[baseKey][colorClass];
        } else if (channel === 'b' && cableChannelBMapping[baseKey]) {
            return cableChannelBMapping[baseKey][colorClass];
        }

        // Возвращаем значение по умолчанию, если нет специфического маппинга для основания
        return cableChannelAMapping['regular'][colorClass];
    }

    function getSelectedColor() {
        const selectedButton = document.querySelector('.constructor__menu-container-color-btns button[class*="--"]:active');
        return selectedButton ? selectedButton.className : '--light-gray';
    }


function updateCableChannelImages(selectedBase) {
    const selectedColor = getSelectedColor();
    
    if (document.getElementById('cable-channel-a-input').checked) {
        selectedCableChannelAImageKey = getCableChannelImageKey('a', selectedColor, selectedBase);
    } else if (document.getElementById('cable-channel-b-input').checked) {
        selectedCableChannelBImageKey = getCableChannelImageKey('b', selectedColor, selectedBase);
    }
    
    redrawCanvas();
}










    let isProgrammaticChange = false;

    function updatePriceByCheckbox(checkbox, priceChange) {
        if (!isProgrammaticChange) {
            if (checkbox.checked) {
                currentTotalPrice += priceChange;
            } else {
                currentTotalPrice -= priceChange;
            }
            updateTotalPrice();
        }
    }

    function initializeTableTopCheckboxes() {
        const checkboxes = document.querySelectorAll('.constructor__menu-container.--table-top .custom-checkbox');
        const eggerInput = document.getElementById("egger");
        const ncsInput = document.getElementById("ncs");
        const mdfInput = document.getElementById("mdf");

        const prices = {
            "egger-input": globalPrices.LDSP_egger,
            "ncs-input": globalPrices.MDF_of_RAL_NCS,
            "mdf-input": globalPrices.MDF_shpon
        };

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    // Увеличиваем общую цену на стоимость выбранного чекбокса
                    currentTotalPrice += prices[this.id];

                    // Снимаем флажок с других чекбоксов и вычитаем их стоимость
                    checkboxes.forEach(cb => {
                        if (cb !== this && cb.checked) {
                            cb.checked = false;
                            currentTotalPrice -= prices[cb.id];
                        }
                    });
                } else {
                    // Уменьшаем общую цену на стоимость снятого чекбокса
                    currentTotalPrice -= prices[this.id];
                }

                updateTotalPrice();  // Обновляем отображение цены

                // Обновление значений input полей
                eggerInput.value = document.getElementById("egger-input").checked ? "+" : "";
                ncsInput.value = document.getElementById("ncs-input").checked ? "+" : "";
                mdfInput.value = document.getElementById("mdf-input").checked ? "+" : "";
            });
        });
    }

    initializeTableTopCheckboxes();


    const form = document.querySelector(".constructor-modal__content");
    const errorContainer = document.querySelector(".error-container__error");
    const completeContainer = document.querySelector(".eroor-container__complite");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        let allFieldsFilled = true;
        ['#name', '#phone', '#e-mail'].forEach(selector => {
            const input = form.querySelector(selector);
            if (!input.value.trim()) {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            errorContainer.style.display = "block";
            completeContainer.style.display = "none";
            return;
        } else {
            errorContainer.style.display = "none";
        }

        fetch("send.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                form.reset(); // Очищаем форму
                completeContainer.style.display = "block";
            })
            .catch(error => {
                errorContainer.style.display = "block";
            });
    });



    class Modal {
        constructor(modalId, openButtons) {
            this.modal = document.getElementById(modalId);
            this.openButtons = [];

            if (typeof openButtons === 'string') {
                this.openButtons = Array.from(document.getElementsByClassName(openButtons));
            } else if (Array.isArray(openButtons)) {
                this.openButtons = openButtons.map(buttonId => document.getElementById(buttonId));
            }

            this.openButtons.forEach(button => {
                if (button) {
                    button.addEventListener('click', () => {
                        this.open();
                    });
                }
            });

            window.addEventListener('click', (event) => {
                if (this.modal && event.target === this.modal) {
                    this.close();
                }
            });

            const closeButton = this.modal ? this.modal.querySelector('.close') : null;
            if (closeButton) {
                closeButton.addEventListener('click', () => {
                    this.close();
                });
            }
        }

        open() {
            this.modal.style.display = 'block';
            setTimeout(() => {
                this.modal.classList.add('open');
            }, 10);
        }

        close() {
            this.modal.classList.remove('open');
            setTimeout(() => {
                this.modal.style.display = 'none';
            }, 300);
        }

    }

    const constructorModal = new Modal('constructor-modal', '--form-button');

    let formButton = document.querySelector('.--form-button')

    formButton.addEventListener('click', function () {
        document.querySelector('#final-price').value = `${currentTotalPrice + " ₽"}`
    })

    let containers = document.querySelectorAll('.info-container');

    containers.forEach(function (container) {
        let svg = container.querySelector('svg');
        let content = container.querySelector('.info-container__content');
        let video = container.querySelector('video'); // Находим элемент видео внутри контейнера
        let gif = container.querySelector('img'); // Находим элемент gif внутри контейнера
    
        container.addEventListener('mouseenter', function () {
            // Скрываем все info-container__content окна
            document.querySelectorAll('.info-container__content').forEach(function (otherContent) {
                otherContent.style.display = 'none';
                otherContent.classList.remove('visible');
            });
    
            // Показываем только текущее окно
            content.style.display = 'flex';
            setTimeout(() => {
                content.classList.add('visible');
            }, 10);
    
            // Перезапускаем видео, если оно есть
            if (video) {
                video.currentTime = 0; // Сбрасываем текущее время видео на начало
                video.play(); // Запускаем видео
            }
    
            // Перезагружаем gif, если оно есть
            if (gif) {
                gif.src = gif.src; // Перезагружаем gif
            }
        });
    
        container.addEventListener('mouseleave', function () {
            content.classList.remove('visible');
            setTimeout(() => {
                content.style.display = 'none';
            }, 300); // Должно соответствовать длительности анимации в CSS (0.3s = 300ms)
    
            // Останавливаем видео, если оно играет
            if (video && !video.paused) {
                video.pause();
            }
        });
    });

    let licenceCheckbox = document.querySelector('.constructor-modal__checkbox input')

    licenceCheckbox.addEventListener('change', function () {
        if (!licenceCheckbox.checked) {
            document.querySelector('.constructor-modal__checkbox').nextElementSibling.setAttribute('disabled', "")
            document.querySelector('.constructor-modal__checkbox').nextElementSibling.style.opacity = "0.6"
        } else {
            document.querySelector('.constructor-modal__checkbox').nextElementSibling.removeAttribute('disabled', "")
            document.querySelector('.constructor-modal__checkbox').nextElementSibling.style.opacity = "1"
        }
    })

    let colorButtons = document.querySelectorAll('.constructor__menu-container-color-btns button');

    colorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.parentElement.querySelector('p')) {
                button.parentElement.querySelector('p').textContent = this.value;
            }

        });
    });

    let resetButton = document.querySelector('.reset-container');

    let checkboxesAll = document.querySelectorAll('.custom-checkbox');
    let contourPButton = document.querySelector('.contour_p')
    let baseWhiteColor = document.querySelector('.--base .constructor__menu-container-color-btns .--white')
    let tableTopWhiteColor = document.querySelector('.--table-top .--white')

    resetButton.addEventListener('click', function () {

        contourPButton.click()
        baseWhiteColor.click()
        tableTopWhiteColor.click()
        checkboxesAll.forEach(function (checkbox) {
            if (checkbox.checked === true) {
                checkbox.click()

            }
        });
    });

    initializeCableChannels();

});