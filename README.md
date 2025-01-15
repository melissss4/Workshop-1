# Workshop-1

##Workshop 1: 

Current Sketch: https://editor.p5js.org/melisssa/full/3EK7JGzph 

Definition Learnt in Workshop: Local variables are codes that can only be used inside the function.

In this workshop I wanted to try to have shapes generated randomly and move each time so I took inspiration from the workshop and had my code resemble gold stars on a twilight blue sky. I had a lot of trouble finding the way to create a star shape, and was unable to find a star shape that I liked in the P5.js database, so instead I chose to just make the stars round circles as they resembled the stars better than some of the other prism like shapes on the shape library. I tried to find a good star looking shape tutorial on youtube, but when deciding to use small circles instead of a star shape I could not find one I liked, I then went to ChatGPT to ask for a code that would allow the circles to randomise themselves around the canvas in different sizes so that they would look more like stars. However, I also did not want an outline on my shapes so I made sure to use the noStroke () option and added this to my code following the workshop outline.




______________________

function setup() {
  createCanvas(400, 400);
  noStroke();
  background(0, 0, 120); // Set background to dark blue
  let numStars = 100; // Number of stars to create

  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(3, 8); // Random sizes for each star
    drawStar(x, y, size);
  }
}

// Function to draw a star
function drawStar(x, y, size) {
  fill(255, 223, 0); // Gold color
  ellipse(x, y, size, size); // Draw a circle for the star

}
