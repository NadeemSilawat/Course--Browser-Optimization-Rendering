// Quiz

// Section (4) => JavaScript

// * Optiminzing JS for Animations

/* 
    Q. You have 10ms to prepare every frame. How do you 
    make sure JS is out of the way as much as possible?

    1.Optiminzing your JS to else every
    last nanosecond out of your ConvolverNode.

    2. Defer JS to the end of every frame 
    to get the hard work done first.

    3. Execoute JS every 16ms on a schedule.

    4. Execute JS as early as possible every Frame .


Answer => (4)

 */

function animate() {
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


  
