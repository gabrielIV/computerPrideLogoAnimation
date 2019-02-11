let motionPath = MorphSVGPlugin.pathDataToBezier("#mpath", {
  align: "#text1"
});

let motionPath2 = MorphSVGPlugin.pathDataToBezier("#mpath2", {
  align: "#text2"
});

let motionPath3 = MorphSVGPlugin.pathDataToBezier("#mpath3", {
  align: "#text3"
});

let tl = new TimelineMax();

tl.from("#text1", 2, {
  bezier: { values: motionPath, type: "cubic", autoRotate: true },
  opacity: 0
})
  .from("#text2", 2, {
    bezier: { values: motionPath2, type: "cubic", autoRotate: true },
    opacity: 0
  })
  .from("#text3", 2, {
    bezier: { values: motionPath3, type: "cubic", autoRotate: true },
    opacity: 0
  })
  .to(".curve-text", 1, { opacity: 0 }, "+=2");

setInterval(function() {
  tl.restart(0);
}, 10000);
