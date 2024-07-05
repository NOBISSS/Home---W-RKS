function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.8,
    ease: "expo.out",
  });

  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.6,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    "#loader h1",
    {
      color: "black",
      delay: 0.5,
      duration: 0.8,
    },
    "anim"
  );

  tl.to("#loader", {
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });
}
loading();

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"), // Target the main container
    smooth: true, // Enable smooth scrolling
  });

  document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  document
    .querySelector("#footer #footer-icon")
    .addEventListener("click", () => {
      scroll.scrollTo(0);
    });

    document.querySelector(".bottom i").addEventListener("click",function(){
      scroll.scrollTo(735);
    })

  var elems = document.querySelectorAll(".elem");
  var page2 = document.querySelector("#page2");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });
}
loco();

function gpt() {
 
  window.addEventListener("load", () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
    // page2.addEventListener("mouseenter", function () {
      const ele = document.querySelectorAll(".elem");
      const page2 = document.querySelector("#page2");
      const move = document.querySelectorAll(".moving");
      const textt = document.querySelectorAll(".text");
      let currentIndex = 0; 

      const changeBackground = (index) => {
        const eles = ele[index];
        // console.log(ele[1]);
        console.log(index);
        const bgImage = eles.getAttribute("data-img");
        const moves = move[index];
        texts = textt[index];
        // Change the container's background image
        page2.style.backgroundImage = `url('${bgImage}')`;
        moves.style.opacity = "1";

      };

      // Change background at regular intervals (e.g., every 3 seconds)
      const interval = 3000;
      setInterval(() => {

        changeBackground(currentIndex);

        // Update the index for the next cycle
        currentIndex = (currentIndex + 1) % ele.length; // Cycle back to the first text
      }, interval);

      // Initial background set
      changeBackground(currentIndex);
    
  };
})
}

gpt();



function navAnim() {
  var flag = 0;
  var imgg = document.querySelector(".nav-part2 img");
  var navText = document.querySelectorAll(".nav-text");

  imgg.addEventListener("click", () => {
    if (flag == 0) {
      imgg.style.transform = "rotate(-135deg)";
      flag = 1;
    } else {
      imgg.style.transform = "rotate(0deg)";
      flag = 0;
    }
  });
}

navAnim();

function chk() {
  var flag = 0;
  var Links = document.querySelectorAll(".nav-part2 a");
  var icon = document.querySelector(".nav-part2 img");
  var other = document.querySelectorAll(".nav-text");

  icon.addEventListener("click", function () {
    if (flag == 0) {
      flag = 1;
      gsap.to(Links, {
        transform: 'translateX(-7px)',
        duration: 1,
        opacity: 1
      })
    } else {
      flag = 0;
      gsap.to(Links, {
        transform: 'translateX(300px)',
        duration: 1,
        delay: 0.2,
      })
      gsap.to(other, {
        opacity: 0
      })
    }
  })
}
chk();


