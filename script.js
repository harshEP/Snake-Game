let blockSize = 25;
let total_row = 17; // total row number
let total_col = 17; // total column number
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0;  // snake's speed in the X direction
let speedY = 0;  // snake's speed in the Y direction

let snakeBody = [];
let foodX;
let foodY;

let gameOver = false;
let gameStarted = false;
let gameInterval; // holds the setInterval id
let score = 0;     // game score

let scoreDisplay;  // element to show real-time score

// Function to start or restart the game
function startGame() {
  // Clear any existing game loop
  if (gameInterval) {
    clearInterval(gameInterval);
  }
  // Reset game state variables
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  speedX = 1; // start moving right immediately
  speedY = 0;
  snakeBody = [];
  score = 0;
  gameOver = false;
  gameStarted = true;
  placeFood();
  // Start the game loop
  gameInterval = setInterval(update, 1000 / 5);
}

// Main update loop for game logic and drawing
function update() {
  if (gameOver) {
    if (gameInterval) {
      clearInterval(gameInterval);
      gameInterval = null;
      alert("Game Over");
    }
    gameStarted = false;
    drawInitialScreen(); // show the static state after game over
    return;
  }
  
  // Check if snake eats the food
  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    score++; // update score
    placeFood();
  }
  
  // Update snake body segments
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }
  
  // Update snake head position based on speed
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;
  
  // Check for boundary collisions
  if (
    snakeX < 0 ||
    snakeX >= total_col * blockSize ||
    snakeY < 0 ||
    snakeY >= total_row * blockSize
  ) {
    gameOver = true;
  }
  
  // Check for self-collision
  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
      gameOver = true;
    }
  }
  
  // Draw game board
  context.fillStyle = "green";
  context.fillRect(0, 0, board.width, board.height);
  
  // Draw the food
  context.fillStyle = "yellow";
  context.fillRect(foodX, foodY, blockSize, blockSize);
  
  // Draw the snake head
  context.fillStyle = "white";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  
  // Draw the snake body
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }
  
  // Update real-time score display
  scoreDisplay.innerText = "Score: " + score;
}

// Listen for arrow keys (for movement) and Enter key to start/restart the game.
function changeDirection(e) {
  // Start game with Enter if it isn't running
  if (!gameStarted && e.code === "Enter") {
    startGame();
    return;
  }
  // If game isn't started, ignore arrow keys
  if (!gameStarted) return;
  
  if (e.code === "ArrowUp" && speedY !== 1) {
    speedX = 0;
    speedY = -1;
  } else if (e.code === "ArrowDown" && speedY !== -1) {
    speedX = 0;
    speedY = 1;
  } else if (e.code === "ArrowLeft" && speedX !== 1) {
    speedX = -1;
    speedY = 0;
  } else if (e.code === "ArrowRight" && speedX !== -1) {
    speedX = 1;
    speedY = 0;
  }
}

// Randomly place food on the board
function placeFood() {
  foodX = Math.floor(Math.random() * total_col) * blockSize;
  foodY = Math.floor(Math.random() * total_row) * blockSize;
}

// Draw a static initial screen so that the game board is visible on the home screen.
function drawInitialScreen() {
  context.fillStyle = "green";
  context.fillRect(0, 0, board.width, board.height);
  
  // Draw snake head at initial position
  context.fillStyle = "white";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  
  // Draw food at its position
  context.fillStyle = "yellow";
  context.fillRect(foodX, foodY, blockSize, blockSize);
  
  // Display instructions on the board
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Press New Game or Enter to Start", 10, board.height / 2);
}

window.onload = function () {
  // Set up the canvas
  board = document.getElementById("board");
  board.height = total_row * blockSize;
  board.width = total_col * blockSize;
  context = board.getContext("2d");

  // Create and append the real-time score display element
  scoreDisplay = document.createElement("div");
  scoreDisplay.innerText = "Score: " + score;
  scoreDisplay.style.fontSize = "20px";
  scoreDisplay.style.fontWeight = "bold";
  scoreDisplay.style.margin = "10px";
  document.body.appendChild(scoreDisplay);

  // Listen for keyboard events for movement and game start
  document.addEventListener("keyup", changeDirection);

  // Create New Game button dynamically
  let newGameBtn = document.createElement("button");
  newGameBtn.innerText = "New Game";
  newGameBtn.style.margin = "10px";
  newGameBtn.addEventListener("click", startGame);
  document.body.appendChild(newGameBtn);

  // Create Restart Game button dynamically
  let restartGameBtn = document.createElement("button");
  restartGameBtn.innerText = "Restart Game";
  restartGameBtn.style.margin = "10px";
  restartGameBtn.addEventListener("click", startGame);
  document.body.appendChild(restartGameBtn);

  // Set initial food position and draw the static initial screen
  placeFood();
  drawInitialScreen();
};
