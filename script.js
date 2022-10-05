function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function (dets) {
  if (dets.direction === "up") {
      document.querySelector("#uppernav").style.top = "0%";
     
      
  }
  else if (dets.direction == "down") {
      document.querySelector("#uppernav").style.top = "-100%";
  }
})

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();

let cursor = document.getElementById('cursor');

cursor.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;

  console.log(x, y);
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
})

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');
const body = document.querySelector('body');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}