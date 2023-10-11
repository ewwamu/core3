function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
 
    startTimer();
}
setup();

function startTimer() {
    // wait 2 seconds before calling goInactive
    timeoutID = window.setTimeout(goInactive, 2000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
 
function goInactive() {
    // do something
}
 
function goActive() {
    // do something
         
    startTimer();
}
///////////////


// let n = 0,
//   timeouts = [0, 2, 2.5, 5, 2.5],
//   imgs = ['../assets/img/h1.png', '../assets/img/h2.png', 'img2.jpg', 'img3.jpg', 'img4.jpg'
//   ];
// const doImages = (num) => {
//   setTimeout(() => {
//     console.log('show', imgs[num])
//     document.querySelector('[data-changer]').setAttribute('src', imgs[num]);
//     if (num++ < imgs.length) doImages(num);
//   }, timeouts[num] * 500)
// }

// doImages(n);

///////////////

// var currSeconds = 0; 
          
//         $(document).ready(function() { 
          
//             /* Increment the idle time 
//                 counter every second */ 
//             let idleInterval = 
//                 setInterval(timerIncrement, 1000); 
          
//             /* Zero the idle timer 
//                 on mouse movement */ 
//             $(this).mousemove(resetTimer); 
//         }); 
          
//         function resetTimer() { 
          
//             /* Hide the timer text */ 
//             document.querySelector(".timertext") 
//                 .style.display = 'none'; 
              
//             currSeconds = 0; 
//         } 
          
//         function timerIncrement() { 
//             currSeconds = currSeconds + 1; 
          
//             /* Set the timer text to 
//                 the new value */ 
//             document.querySelector(".secs") 
//                 .textContent = currSeconds; 
          
//             /* Display the timer text */ 
//             document.querySelector(".timertext") 
//                 .style.display = 'block'; 
//         } 