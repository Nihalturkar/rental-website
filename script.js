
gsap.registerPlugin(ScrollTrigger);




// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// //   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });




function loader_page() {
    gsap.to("#pageloder", {
        scrollTrigger: {
            trigger: '#pageloder',
            pin: true
        }

        , duration:1.8
    })


    var tl = gsap.timeline();

    tl
        .from("#text", {
            opacity: 0,
            duration: 0.7,
            y: 50,
            scale: 60
        })
        .from("#track", {
            opacity: 0,
            duration: 1,
            x: -108,
            ease: "elastic.inOut(2, 1)"
        })
        .to("#truck", {
            x: "58vw",
            duration: 1.2,
        }, "-=0.5")

        .to("#smoke", {
            x: "56vw",
            duration: 1.2,
        }, "-=1.12")
        .to("#lpg", {
            y: 420,
            duration: 0.3,
        })
        .to("#wardrobe", {
            y: 380,
            duration: 0.2,
        })
        .to("#sofa", {
            y: 420,
            duration: 0.2,
        })
        .to("#shelf", {
            y: 380,
            duration: 0.2,
        })
        .to("#box", {
            y: 400,
            duration: 0.2,
        })
        .to("#books", {
            y: 430,
            duration: 0.2,
        })
        .to("#stove", {
            y: 420,
            duration: 0.2,
        })
        .to("#truck", {
            x: 1920,
            duration: 1,
            delay: 1.2
        }, "-=1")
        .to("#smoke", {
            x: 1880,
            duration: 1,
        }, "-=1")
        .to("#lpg", {
            x: 1000,
            duration: 1,
        }, "-=1")
        .to("#wardrobe", {
            x: 1001,
            duration: 1,
        }, "-=1")
        .to("#sofa", {
            x: 996,
            duration: 1,
        }, "-=1")
        .to("#shelf", {
            x: 1004,
            duration: 1,
        }, "-=1")
        .to("#books", {
            x: 1005,
            duration: 1,
        }, "-=1")
        .to("#stove", {
            x: 1003,
            duration: 1,
        }, "-=1")
        .to("#box", {
            x: 1004,
            duration: 1,
        }, "-=1")
        .to("#track,#text", {
            y: -540,
            duration: 1,
            opacity: 0,
        })
        .to("#loderpage", {
            height: '0vh',
            duration: 0.2

        },"-=1")

}
loader_page();




function canvas_page() {    
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    window.addEventListener("resize", function () {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })


    const frameCount = 192;

    const images = []
    const currentshowing = {
        frame: 1
    }

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `./image/h1 (${i}).jpg`;
        images.push(img);

    }
    gsap.to(currentshowing, {
        frame: frameCount,
        snap: "frame",
        ease: "none",
        scrollTrigger: {

            trigger: '#canvas_page',
            start: 'top top',
            end: '+=800px'
            , scrub: 0.8,
            pin: true,


        },
        onUpdate: render


    });

    images[1].onload = render;



    function render() {
        drawImageScaled(images[currentshowing.frame], context);
    }

    function drawImageScaled(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;

        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    gsap.from(`#overlay-text>h1>span`, {

        scrollTrigger: {
            trigger: '#overlay_canvas',
            start: 'top top',
            end: '+=300px',
            scrub: 0.8,
            toggleActions: "play restart play reverse",
        },
        opacity:0,
         y:50 ,
    
        color: '#000',
        ease: Power2.easeOut,
        stagger: 0.2,
    
    
    
    });
    gsap.from(`#overlay-text>h4>span`, {
    
        scrollTrigger: {
            trigger: '#overlay_canvas',
            start: 'top top',
            end: '+=400px'
            , scrub: 0.8,
            toggleActions: "play restart play reverse",
        },
        opacity:0,
         y:50 ,
        color: '#000',
        ease: Power2.easeOut,
        stagger: 0.2,
    
    
    
    });
    
}

canvas_page();

function map_page() {

    var arrbhk = [
        { bed_room: '1', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water ,Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '7647644374', gmail: 'ankit11@gmail.com', rent: '4000' },
        { bed_room: '1', bath_room: '1', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: ' backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'garage', contact: '984644374', gmail: 'mewada@gmail.com', rent: '4200' },
        { bed_room: '1', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '3', area: 'marble', parking: 'open air', contact: '76644374', gmail: 'hdshf@gmail.com', rent: '4400' },
        { bed_room: '1', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '1', area: 'marble', parking: 'garage', contact: '762344374', gmail: 'helo11@gmail.com', rent: '4050' },
        { bed_room: '1', bath_room: '1', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: 'backup', security: 'others', pet: 'yes', floor: '4', area: 'marble', parking: 'only for bike', contact: '767644374', gmail: 'ankit11@gmail.com', rent: '4100' },
        { bed_room: '1', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '9246444374', gmail: 'thakur11@gmail.com', rent: '4100' },
        { bed_room: '1', bath_room: '1', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: 'backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '797844374', gmail: 'ankit12@gmail.com', rent: '5000' },
        { bed_room: '1', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'gouravt435@gmail.com', rent: '5500' },
        { bed_room: '1', bath_room: '1', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: ' backup', security: 'others', pet: 'no', floor: '6', area: 'marble', parking: 'garage', contact: '9648764374', gmail: 'ankit11@gmail.com', rent: '5000' },
        { bed_room: '1', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'mahendra@gmail.com', rent: '3000' },

        { bed_room: '2', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water ,Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '7647644374', gmail: 'ankit11@gmail.com', rent: '7000' },
        { bed_room: '2', bath_room: '1', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: ' backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'garage', contact: '984644374', gmail: 'mewada@gmail.com', rent: '6000' },
        { bed_room: '2', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '3', area: 'marble', parking: 'open air', contact: '76644374', gmail: 'hdshf@gmail.com', rent: '6500' },
        { bed_room: '2', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '1', area: 'marble', parking: 'garage', contact: '762344374', gmail: 'helo11@gmail.com', rent: '7500' },
        { bed_room: '2', bath_room: '1', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: 'backup', security: 'others', pet: 'yes', floor: '4', area: 'marble', parking: 'only for bike', contact: '767644374', gmail: 'ankit11@gmail.com', rent: '8600' },
        { bed_room: '2', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '9246444374', gmail: 'thakur11@gmail.com', rent: '6700' },
        { bed_room: '2', bath_room: '1', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: 'backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '797844374', gmail: 'ankit12@gmail.com', rent: '7600' },
        { bed_room: '2', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'gouravt435@gmail.com', rent: '5400' },
        { bed_room: '2', bath_room: '1', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: ' backup', security: 'others', pet: 'no', floor: '6', area: 'marble', parking: 'garage', contact: '9648764374', gmail: 'ankit11@gmail.com', rent: '8700' },
        { bed_room: '2', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'mahendra@gmail.com', rent: '7800' },


        { bed_room: '3', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water ,Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '7647644374', gmail: 'ankit11@gmail.com', rent: '10000' },
        { bed_room: '3', bath_room: '1', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: ' backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'garage', contact: '984644374', gmail: 'mewada@gmail.com', rent: '14000' },
        { bed_room: '3', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '3', area: 'marble', parking: 'open air', contact: '76644374', gmail: 'hdshf@gmail.com', rent: '14200' },
        { bed_room: '3', bath_room: '1', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '1', area: 'marble', parking: 'garage', contact: '762344374', gmail: 'helo11@gmail.com', rent: '12000' },
        { bed_room: '3', bath_room: '1', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: 'backup', security: 'others', pet: 'yes', floor: '4', area: 'marble', parking: 'only for bike', contact: '767644374', gmail: 'ankit11@gmail.com', rent: '11000' },
        { bed_room: '3', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '8', area: 'marble', parking: 'garage', contact: '9246444374', gmail: 'thakur11@gmail.com', rent: '13000' },
        { bed_room: '3', bath_room: '1', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: 'backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'garage', contact: '797844374', gmail: 'ankit12@gmail.com', rent: '15000' },
        { bed_room: '3', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'gouravt435@gmail.com', rent: '14000' },
        { bed_room: '3', bath_room: '1', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: ' backup', security: 'others', pet: 'no', floor: '6', area: 'marble', parking: 'garage', contact: '9648764374', gmail: 'ankit11@gmail.com', rent: '13000' },
        { bed_room: '3', bath_room: '1', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '4', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'mahendra@gmail.com', rent: '16000' },


        { bed_room: '4', bath_room: '2', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water ,Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'tiles', parking: 'garage', contact: '7647644374', gmail: 'ankit11@gmail.com', rent: '16000' },
        { bed_room: '4', bath_room: '2', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: ' backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'garage', contact: '984644374', gmail: 'mewada@gmail.com', rent: '17000' },
        { bed_room: '4', bath_room: '2', furnishing: 'semi furnished', balcony: '1', water: 'Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '3', area: 'tiles', parking: 'open air', contact: '76644374', gmail: 'hdshf@gmail.com', rent: '18000' },
        { bed_room: '4', bath_room: '2', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '7', area: 'marble', parking: 'garage', contact: '762344374', gmail: 'helo11@gmail.com', rent: '30000' },
        { bed_room: '4', bath_room: '2', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: 'backup', security: 'others', pet: 'yes', floor: '4', area: 'marble', parking: 'only for bike', contact: '767644374', gmail: 'ankit11@gmail.com', rent: '23000' },
        { bed_room: '4', bath_room: '2', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'tiles', parking: 'garage', contact: '9246444374', gmail: 'thakur11@gmail.com', rent: '34000' },
        { bed_room: '4', bath_room: '2', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: 'backup', security: 'others', pet: 'no', floor: '9', area: 'marble', parking: 'garage', contact: '797844374', gmail: 'ankit12@gmail.com', rent: '23000' },
        { bed_room: '4', bath_room: '2', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'gouravt435@gmail.com', rent: '24000' },
        { bed_room: '4', bath_room: '2', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: ' backup', security: 'others', pet: 'no', floor: '1', area: 'marble', parking: 'garage', contact: '9648764374', gmail: 'ankit11@gmail.com', rent: '35000' },
        { bed_room: '4', bath_room: '2', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'mahendra@gmail.com', rent: '43000' },

        { bed_room: '2 ,with 1 hall', bath_room: '2', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water ,Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'tiles', parking: 'garage', contact: '7647644374', gmail: 'ankit11@gmail.com', rent: '34000' },
        { bed_room: '4 ,with 2 hall', bath_room: '2', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: ' backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'garage', contact: '984644374', gmail: 'mewada@gmail.com', rent: '55000' },
        { bed_room: '2 ,with 1 hall', bath_room: '2', furnishing: 'semi furnished', balcony: '1', water: 'Bore water', power: 'No backup', security: 'others', pet: 'no', floor: '3', area: 'tiles', parking: 'open air', contact: '76644374', gmail: 'hdshf@gmail.com', rent: '23000' },
        { bed_room: '2 ,with 1 hall', bath_room: '2', furnishing: 'semi furnished', balcony: '1', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '7', area: 'marble', parking: 'garage', contact: '762344374', gmail: 'helo11@gmail.com', rent: '34000' },
        { bed_room: '1 ,with 4 hall', bath_room: '2', furnishing: 'well furnished', balcony: '2', water: 'Bore water', power: 'backup', security: 'others', pet: 'yes', floor: '4', area: 'marble', parking: 'only for bike', contact: '767644374', gmail: 'ankit11@gmail.com', rent: '45000' },
        { bed_room: '3 ,with 3 hall', bath_room: '2', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'tiles', parking: 'garage', contact: '9246444374', gmail: 'thakur11@gmail.com', rent: '42000' },
        { bed_room: '2 ,with 1 hall', bath_room: '2', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: 'backup', security: 'others', pet: 'no', floor: '9', area: 'marble', parking: 'garage', contact: '797844374', gmail: 'ankit12@gmail.com', rent: '34000' },
        { bed_room: '1 ,with 1 hall', bath_room: '2', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'yes', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'gouravt435@gmail.com', rent: '34000' },
        { bed_room: '3 ,with 2 hall', bath_room: '2', furnishing: 'well furnished', balcony: '1', water: 'Bore water', power: ' backup', security: 'others', pet: 'no', floor: '1', area: 'marble', parking: 'garage', contact: '9648764374', gmail: 'ankit11@gmail.com', rent: '45000' },
        { bed_room: '2 ,with 1 hall', bath_room: '2', furnishing: 'semi furnished', balcony: '2', water: 'Municipal water', power: 'No backup', security: 'others', pet: 'no', floor: '2', area: 'marble', parking: 'only for bike', contact: '7647644374', gmail: 'mahendra@gmail.com', rent: '23000' },

    ];

    function map_move() {


        document.querySelector("#map_page").addEventListener("mousemove", function (det) {

            if (det.x > 1085) {

                document.querySelector("#map_img_div").style.left = '-49%';
            }
            else if (det.x < 365) {

                document.querySelector("#map_img_div").style.left = '-1%';


            }

            else if (det.x > 365 && det.x < 725) {

                document.querySelector("#map_img_div").style.left = '-15%';


            }

            else {
                document.querySelector("#map_img_div").style.left = '-25%';


            }
        });


        document.querySelector("#map_page").addEventListener("mousemove", function (det) {

            if (det.y > 413) {

                document.querySelector("#map_img_div").style.top = '-51%';
            }
            else if (det.y < 138) {
                document.querySelector("#map_img_div").style.top = '-0.9%';


            }
            else if (det.y > 138 && det.y < 275) {

                document.querySelector("#map_img_div").style.top = '-13%';
            }



            else {
                document.querySelector("#map_img_div").style.top = '-25%';


            }
        });
    }


    function map_freeze() {
        console.log("freeze map");

        document.querySelector("#map_page").addEventListener("mousemove", function (det) {

            if (det.x > 1085) {

                document.querySelector("#map_img_div").style.left = '-25%';
            }
            else if (det.x < 365) {

                document.querySelector("#map_img_div").style.left = '-25%';


            }
            else {
                document.querySelector("#map_img_div").style.left = '-25%';


            }
        });


        document.querySelector("#map_page").addEventListener("mousemove", function (det) {

            if (det.y > 413) {

                document.querySelector("#map_img_div").style.top = '-25%';
            }
            else if (det.y < 138) {
                document.querySelector("#map_img_div").style.top = '-25%';


            }
            else {
                document.querySelector("#map_img_div").style.top = '-25%';


            }
        });








    }

    map_move();

    let clutter_owner = "";
    arrbhk.forEach(function (val, index) {


        clutter_owner += `<div class="popup_rent" id="popup_rent${index + 1}">
    <div class="property_det_div">
        <div class="property_det_img">
            <img src="./image/r${index + 1}.jpg" alt="">
            <div class="property_img_overlay"></div>
        </div>
        <div class="property_txt">
            <h1>property details:-</h1>
            <div class="flex1">
                <div class="coloum_wise">
                    <h1>Bed Rooms</h1>
                    <h2>${val.bed_room}</h2>
                </div>
                <div class="coloum_wise">
                    <h1>Bath Rooms</h1>
                    <h2>${val.bath_room}</h2>
                </div> <div class="coloum_wise">
                    <h1>furnishing status</h1>
                    <h2>${val.furnishing}</h2>
                </div> <div class="coloum_wise">
                    <h1>Balcony</h1>
                    <h2>${val.balcony}</h2>
                </div> 
            </div>
            
            <div class="flex1">
                <div class="coloum_wise">
                    <h1>Water Supply</h1>
                    <h2>${val.water}</h2>
                </div>
                <div class="coloum_wise">
                    <h1> Power Backup</h1>
                    <h2>${val.power}</h2>
                </div> 
                <div class="coloum_wise">
                    <h1> Security Deposit</h1>
                    <h2>${val.security}</h2>
                </div> 
            </div>
            <div class="flex1">
                <div class="coloum_wise">
                    <h1>Pets Allowed</h1>
                    <h2>${val.pet}</h2>
                </div>
                <div class="coloum_wise">
                    <h1>Total Floor</h1>
                    <h2>${val.floor}</h2>
                </div> <div class="coloum_wise">
                    <h1>Common Area Flooring</h1>
                    <h2>${val.area}</h2>
                </div>
                 <div class="coloum_wise">
                    <h1>Parking / Parking Type</h1>
                    <h2>${val.parking}</h2>
                </div> 
                <div class="coloum_wise">
                <h1>Rent</h1>
                <h2>Rs ${val.rent}/-</h2>
            </div>
            </div> 
        </div>
    
    </div>
    <div class="contact_owner">
        <h1>contact owner</h1>
    
    
        <div class="flex">
            <i class="ri-phone-fill"></i>
            <h2>91+ ${val.contact}</h2>
    
        </div>
    
        <div class="flex">
            <i class="ri-mail-send-fill"></i>
            <h2>${val.gmail}</h2>
    
        </div>
        <input type="" placeholder="Enter message here">
    
    
    </div>
    
    <i id="popup_close${index + 1}" class="ri-close-circle-fill"></i>
    
    </div>
    `;

    });

    document.querySelector("#popup_rent_div").innerHTML = clutter_owner;


    for (let i = 1; i < 51; i++) {

        document.querySelector(`#rent_icon${i}`).addEventListener("click", function () {
            map_freeze();
            document.querySelector(`#rent_icon${i}`).style.scale = 1.8;
            document.querySelector(`#popup_rent_div`).style.display = 'initial';

            document.querySelector(`#popup_rent${i}`).style.display = 'initial';

        });
        document.querySelector(`#popup_close${i}`).addEventListener("click", function () {



            map_move();
            document.querySelector(`#popup_rent_div`).style.display = 'none';
            document.querySelector(`#rent_icon${i}`).style.scale = 1;

            document.querySelector(`#popup_rent${i}`).style.display = 'none';


        });
        document.querySelector(`#popup_rent${i} .property_img_overlay`).addEventListener("mouseenter", function () {


            document.querySelector(`#popup_rent${i} .property_det_img>img`).style.scale = 1.2;


        });
        document.querySelector(`#popup_rent${i} .property_img_overlay`).addEventListener("mouseleave", function () {


            document.querySelector(`#popup_rent${i} .property_det_img>img`).style.scale = 1;


        });


    }
    for (let j = 1; j <= 50; j++) {

        if (j > 0 && j <= 10) {

            document.querySelector("#category1").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "initial";





            });
        }
        else {
            document.querySelector("#category1").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "none";





            });
        }



    }
    for (let j = 1; j <= 50; j++) {

        if (j > 10 && j <= 20) {
            document.querySelector("#category2").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "initial";



            });
        }
        else {
            document.querySelector("#category2").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "none";



            });

        }

    }
    for (let j = 1; j <= 50; j++) {

        if (j > 20 && j <= 30) {


            document.querySelector("#category3").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "initial";



            });
        }
        else {
            document.querySelector("#category3").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "none";



            });

        }

    }
    for (let j = 1; j <= 50; j++) {

        if (j > 30 && j <= 40) {
            document.querySelector("#category4").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "initial";



            });

        }
        else {
            document.querySelector("#category4").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "none";



            });

        }

    }
    for (let j = 1; j <= 50; j++) {

        if (j > 40 && j <= 50) {
            document.querySelector("#category5").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "initial";



            });


        }
        else {
            document.querySelector("#category5").addEventListener("click", function () {
                document.querySelector(`#rent_icon${j}`).style.display = "none";



            });

        }

    }
    for (let j = 1; j <= 50; j++) {


        document.querySelector("#category6").addEventListener("click", function () {
            document.querySelector(`#rent_icon${j}`).style.display = "initial";




        });

    }
}
map_page();


function contact_page() {


    // gsap.to("#thanks", {

    //     scrollTrigger: {
    //         trigger: '#house_zoom'
    //         , start: 'top 0.1%',
    //         end: '+=600px',

    //         scrub: true,



    //         // toggleActions: 'play restart play reverse'

    //     },
    //     top: '30%',

    //     height: '300px'
    // });
    // gsap.to("#arr", {

    //     scrollTrigger: {
    //         trigger: '#house_zoom'
    //         , start: 'top 0.1%',
    //         end: '+=50px',


    //         scrub: true,

    //         // toggleActions: 'play restart play reverse'

    //     },
    //     top: '50%',

    //     height: '0px'
    // });
    gsap.to("#left_cont", {

        scrollTrigger: {
            trigger: '#contact'
            , start: 'top top',
            end: '+=600px',



            scrub: 0.2,
            pin: true,
            // toggleActions: 'restart pause resume pause'

        },
        left: '-100%',

    })


    gsap.to("#right_cont", {

        scrollTrigger: {
            trigger: '#contact'
            , start: 'top top',
            end: '+=600px',



            scrub: 0.2,

            // toggleActions: 'restart pause resume pause'

        },
        left: '100%',

    })

    gsap.to("#center_cont", {

        scrollTrigger: {
            trigger: '#contact'
            , start: 'top top',
            end: '+=600px',



            scrub: 0.2,

            // toggleActions: 'restart pause resume pause'

        },
        left: '0%',

    })
    gsap.to(".c_c_line", {

        scrollTrigger: {
            trigger: '#contact'
            , start: 'top top',
            end: '+=600px',



            scrub: true,

            // toggleActions: 'restart pause resume pause'

        },
        height: '100vh',

    })


    // function telephone_lamb() {

    //     setInterval(function () {

    //         gsap.to('.lamb,.lambr', {

    //             opacity: 0,
    //             duration: 0.3,
    //             ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"
    //         });
    //     }, 1000)

    //     setInterval(function () {

    //         gsap.to('.lamb,.lambr', {

    //             opacity: 0.9,
    //             duration: 0.3,
    //             ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})"

    //         });
    //     }, 2000)
    // }
    // telephone_lamb();


    setInterval(function () {

        gsap.to('.icon_line', {

            height: '0vh',

        });
        gsap.to("#contact_icons_div>img", {

            top: '14%'
        });
    }, 1500);
    setInterval(function () {

        gsap.to('.icon_line', {

            height: '13vh'

        });

        gsap.to("#contact_icons_div>img", {

            top: '50%'
        });


    }, 3000);


}
contact_page();



function city() {

    const circle = document.querySelector("#circle")
    const cities = document.querySelectorAll(".det-flex .city")

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    window.addEventListener("mousemove", function (dets) {
        gsap.to(circle, {
            x: dets.clientX,
            y: dets.clientY,
            duration: .3,
            ease: Expo
        })

        cities.forEach(city => {
            city.addEventListener("mousemove", function (dets) {
                var dims = city.getBoundingClientRect();
                var xstart = dims.x;
                var xend = dims.x + dims.width;
                var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX)

                gsap.to(circle, {
                    scale: 4,
                    color: "#fff"
                })
                gsap.to(city.children, {
                    x: lerp(-30, 30, zeroone),
                    duration: .3,
                })
            })
            city.addEventListener("mouseleave", function (dets) {
                gsap.to(circle, {
                    scale: 1
                })
                gsap.to(city.childern, {
                    x: lerp(-50, 50, zeroone),
                    duration: .3,
                    color: "#000"
                })
            })
        })
    })

    gsap.from(`#browes>h1>span`, {

        scrollTrigger: {


            trigger: `#browes>h1`,
            toggleActions: "play restart play reverse",
        }, opacity: 0,

        color: 'red',
        ease: Power2.easeOut,
        stagger: 0.2,



    });


    gsap.from(`#properties>h1>span`, {

        scrollTrigger: {


            trigger: `#properties>h1`,
            toggleActions: "play restart play reverse",
        }, opacity: 0,

        color: 'red',
        ease: Power2.easeOut,
        stagger: 0.2,



    });
    gsap.from(`.register>h1>span`, {

        scrollTrigger: {


            trigger: `.register>h1`,
            toggleActions: "play restart play reverse",
        }, opacity: 0,

        color: 'red',
        ease: Power2.easeOut,
        stagger: 0.2,



    });
}

city();


function hostel() {

    var hostle_array = [
        { img: 'image/hostel/hostel (7).avif', hostle_name: "destiney hostel", location: "23, Ravindra Nagar, Old Palasia, Indore, Madhya Pradesh 452018", phone: "098260 30203", hours: " Open ⋅ Closes 7:30 pm" },
        { img: 'image/hostel/hostel (4).avif', hostle_name: "jugnoo hostel", location: " 84,anand Nagar, new Palasia, Indore, Madhya Pradesh 452018", phone: "092350 30203", hours: "Open 24 hours" },
        { img: 'image/hostel/hostel (2).avif', hostle_name: "dollar hostel", location: "Plot No. 252, Scheme 78, Part II, Vijay Nagar, Indore, Madhya Pradesh 452010", phone: "098260 30203", hours: " Open ⋅ Closes 7:30 pm" },
        { img: 'image/hostel/hostel (5).avif', hostle_name: "indian hostel", location: "Plot No. 41, Pipliya Rao, Indore, Madhya Pradesh 452010", phone: "034540 30203", hours: " Open ⋅ Closes 7:30 pm" },
        { img: 'image/hostel/hostel (1).avif', hostle_name: "bhopali hostel", location: "EG-17, Bhanvarkuan, Sceme No 54, Vijay Nagar, Indore, Madhya Pradesh 452010", phone: "098670 3703", hours: " Open 24 hours" },
        { img: 'image/hostel/hostel (10).avif', hostle_name: "indori hostel", location: "Dream Boys Hostel, 109, Kailash Park Colony, Rajgarh Kothi, Manorama Ganj, Indore, Madhya Pradesh 452001", phone: "098260 30203", hours: " Open ⋅ Closes 7:30 pm" },
        { img: 'image/hostel/hostel (8).avif', hostle_name: "circuit hostel", location: "A - 24, Sector A, Mahalaxmi Nagar, Indore, Madhya Pradesh 452010", phone: "098260 30203", hours: "Open 24 hours" },
        { img: 'image/hostel/hostel (6).avif', hostle_name: "halkat hostel", location: "11, AB Rd, Old Palasia, Indore, Madhya Pradesh 452001", phone: "098260 30203", hours: " Open ⋅ Closes 7:30 pm" },
        { img: 'image/hostel/hostel (3).avif', hostle_name: "chapri hostel", location: " Plot No. 19 & 20, Scheme No 78 - II, Part II, Vijay Nagar, Indore, Madhya Pradesh 452010", phone: "098260 30203", hours: "Open 24 hours" },
        { img: 'image/hostel/hostel (9).avif', hostle_name: "sweet hostel", location: "Dream Boys Hostel, 109, Kailash Park Colony, Rajgarh Kothi, Manorama Ganj, Indore, Madhya Pradesh 452001", phone: "098260 30203", hours: " Open ⋅ Closes 7:30 pm" },
    ]



    var hostel_clutter = "";

    hostle_array.forEach(function (val, index) {
        hostel_clutter += `
      
      <div class="hostel_card"  id="hostel_card${index + 1}">
         <div class="hostel_img">
            <img src="${val.img}" alt="">
    
    
          </div>
        </div>`;


    });

    document.querySelector("#boys_hostel").innerHTML = hostel_clutter;

    var hostel_flag = 1;


    document.querySelector("#arr_r").addEventListener("click", function () {


        for (let i = 1; i <= 10; i++) {
            if (i == hostel_flag) {
                console.log(hostel_flag);

                console.log("i th value", i);

                document.querySelector(`#hostel_card${i}`).style.left = '16%';
                document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(0.5deg)';


                document.querySelector(`.hostel_card_dummy>.hostel_img>img`).src = `image/hostel/hostel (${i}).avif`;
                var hostel_det_clutter = `<div class="hostel_det_flex">
      <h2>  <span>HOSTEL :</span> ${hostle_array[i - 1].hostle_name}</h2>
    
         <div class="hostel_det_displayflex">
    
             <i class="ri-map-pin-fill"></i>
             <h2>${hostle_array[i - 1].location}</h2>
    
         </div>
    
      </div>
    
      <div class="hostel_det_flex">
      <h2> <span>Phone :</span> ${hostle_array[i - 1].phone}</h2>
      <h2> <span>Hours :</span> ${hostle_array[i - 1].hours}</h2>
     
     
    
      </div>
    
     <input type="hostel_massage" placeholder="Enter message here...">`;


                document.querySelector(".hostel_det").innerHTML = hostel_det_clutter;

            }


        }

        if (hostel_flag < 10) {
            hostel_flag++;



        }


        if (hostel_flag <= 10) {

            document.querySelector("#arr_r").style.display = 'flex';

        }
        else {
            document.querySelector("#arr_r").style.display = 'none';

        }

        if (hostel_flag > 0) {

            document.querySelector("#arr_l").style.display = 'flex';

        }
        else {
            document.querySelector("#arr_l").style.display = 'none';

        }


    });

    document.querySelector("#arr_l").addEventListener("click", function () {


        for (let i = 1; i < 10; i++) {
            if (i == hostel_flag) {




                document.querySelector(`.hostel_card_dummy>.hostel_img>img`).src = `image/hostel/hostel (${i}).avif`;

                let hostel_det_clutter2 = `<div class="hostel_det_flex">
              <h2>  <span>HOSTEL :</span> ${hostle_array[i - 1].hostle_name}</h2>
    
         <div class="hostel_det_displayflex">
    
             <i class="ri-map-pin-fill"></i>
             <h2>${hostle_array[i - 1].location}</h2>
    
         </div>
    
          </div>
    
            <div class="hostel_det_flex">
              <h2> <span>Phone :</span> ${hostle_array[i - 1].phone}</h2>
            <h2> <span>Hours :</span> ${hostle_array[i - 1].hours}</h2>
     
     
    
          </div>
          <input type="hostel_massage" placeholder="Enter message here...">`;


                document.querySelector(".hostel_det").innerHTML = hostel_det_clutter2;

                if (i == 1) {
                    document.querySelector(`#hostel_card${i}`).style.left = '21%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(1deg)';

                }
                else if (i == 2) {
                    document.querySelector(`#hostel_card${i}`).style.left = '23%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(2.5deg)';

                }
                else if (i == 3) {
                    document.querySelector(`#hostel_card${i}`).style.left = '27%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(3.5deg)';

                }
                else if (i == 4) {
                    document.querySelector(`#hostel_card${i}`).style.left = '30%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(4.5deg)';

                }
                else if (i == 5) {
                    document.querySelector(`#hostel_card${i}`).style.left = '32%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(5.5deg)';

                } else if (i == 6) {
                    document.querySelector(`#hostel_card${i}`).style.left = '33.8%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(6.5deg)';

                } else if (i == 7) {
                    document.querySelector(`#hostel_card${i}`).style.left = '35.4%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(7.5deg)';

                } else if (i == 8) {
                    document.querySelector(`#hostel_card${i}`).style.left = '36.8%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(8.5deg)';

                } else if (i == 9) {
                    document.querySelector(`#hostel_card${i}`).style.left = '37.9%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(9.5deg)';

                }
                else if (i == 10) {
                    document.querySelector(`#hostel_card${i}`).style.left = '38.9%';
                    document.querySelector(`#hostel_card${i}`).style.transform = 'rotate(10.5deg)';

                }
                else {
                    console.log("out of range");
                }



            }


        }

        if (hostel_flag > 0) {
            hostel_flag--;
        }

        if (hostel_flag < 10) {

            document.querySelector("#arr_r").style.display = 'flex';

        }
        else {
            document.querySelector("#arr_r").style.display = 'none';

        }



        if (hostel_flag > 1) {

            document.querySelector("#arr_l").style.display = 'flex';

        }
        else {
            document.querySelector("#arr_l").style.display = 'none';

        }

    });


}
hostel();


document.querySelector("#loderpage");
this.addEventListener("mousemove",function(){
    document.querySelector("#canvas_page").style.position = "fixed";
})

function nav(){
    // for navbar
let prevScrollPosition = window.pageYOffset;
window.onscroll = function(){
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition){
        document.querySelector("#nav").style.top = "0";

    }else{
        document.querySelector("#nav").style.top = "-80px";

    }
    prevScrollPosition = currentScrollPosition;
}
}


nav();

function agreement(){
    

var use_lang=document.querySelector("#agree_txt").textContent.split("");

let clutter_lang="";
use_lang.forEach(function(val){

clutter_lang+=`<span>${val}</span>`;

});

document.querySelector("#agree_txt").innerHTML=clutter_lang;

gsap.from("#agree_txt>span",{

scrollTrigger:{

    trigger:'#agree_txt>span',

    toggleActions:'play restart play reverse'
},
opacity:0,
y:50,
stagger:0.03,


// duration:2
})
}
agreement();