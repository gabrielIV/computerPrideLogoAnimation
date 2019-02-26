var tl = new TimelineMax({ repeat: -1 });

tl.to("#logo-img", 3, { rotation: 360, ease: Power4.easeInOut })
  .staggerFrom(".loader-tbg", 1, { opacity: 0 }, 0.2, "-=2")
  .staggerTo(".loader-tbg", 1, { opacity: 0 }, 0.2);

setTimeout(() => {
  var tl2 = new TimelineMax();
  tl2.to(".loader-curtain", 1, { opacity: 0 }).set(".loader-curtain", {
    display: "none"
  });
}, 6000);
