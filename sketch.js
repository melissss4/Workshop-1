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
  
  
 