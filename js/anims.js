import Lenis from 'lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function svg_anims() {
    
    const paths = [...document.querySelectorAll('path.path-anim')];

    paths.forEach(el => {
        const svgEl = el.closest('svg');
        const pathTo = el.dataset.pathTo;
        
        gsap.timeline({
            scrollTrigger: {
                trigger: svgEl,
                start: "top 90%",
                end: "bottom 20%",
                scrub: true
            }
        })
        .to(el, {
            ease: 'none',
            attr: { d: pathTo }
        });

    });
}

function text_anims() {

    const reveal_texts = $(".text-reveal-on-scroll").toArray();
    reveal_texts.forEach(el => {
        gsap.to(el, {  
            scrollTrigger: {
                trigger: el,
                start: "top 90%", 
                end: "bottom 20%", 
                scrub: true
            },
            y : 0,
            ease: "power3.out"
            
        });
    });
}

function smoothAnchorScroll(lenis) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          lenis.scrollTo(this.getAttribute('href'))
        });
      })
}

function fixHomeHeight() {
    $("#home").css("min-height", window.innerHeight);

}

export function anims_events() {
    
    //Smooth Lenis scroll
    const lenis = new Lenis({
        lerp: 0.1, 
        wheelMultiplier: .5, 
    });
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    //ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    smoothAnchorScroll(lenis);

    //ScrollTrigger animations
    text_anims();
    svg_anims();

    fixHomeHeight();
}
