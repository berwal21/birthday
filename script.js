const tl = gsap.timeline();
tl.to(
    ".temp",
    {
      duration: 5,
      delay: 10,
      opacity: 1,
      onStart: function () {
        $(".word1").scramble(2000, 80, "alphabet", true);
        $(".word2").scramble(2000, 50, "alphabet", true);
        $(".word3").scramble(2000, 50, "alphabet", true);
        const confettiSound = document.getElementById("confettiSound");
        confettiSound.volume = 1.0; // Set volume to maximum
        confettiSound.play();
      },
    },
    "a"
  );
  tl.to(".wrapper", {
    // yoyo: true,
    duration: 5,
    delay: 10.3,
    // repeat: 1,
    onchange: function () {
        party.confetti(document.getElementById("confettiTarget"), {
            count: party.variation.range(70, 100),
            size: party.variation.range(1.2, 1.5),
        });
    },
}, "a");

tl.to(".wrapper",{
    y:"-100%",
    duration:3
})
  

