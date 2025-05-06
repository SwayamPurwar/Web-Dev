const time = gsap.timeline();

time.from("h1", {
  duration: 1,
  y: 50,
  opacity: 0,
  stragger: 1,
});

time.from("p", {
  duration: 2,
  y: 50,
  opacity: 0,
  stragger: 1,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    markers: true,
    start: "top 40%",
    end: "top 20%",
    scrub: 1,
    pin: true,
    //  scrollTrigger:{
    //     trigger:".page2",
    //     start:'top 0%',
    //     end:"top -100%",
    //     scrub:1

    //  }
  },
});

tl.to("img", {
  width: "95%",
});
