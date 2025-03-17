# Snake Game with Harsh Gupta

## Overview
"Snake Game with Harsh Gupta" is a browser-based implementation of the classic Snake game using HTML, CSS, and JavaScript. In this game, the player controls a snake that grows longer with every food item eaten while avoiding collisions with the walls or its own body.

## Features
- **Real-time Score:** The game displays your current score as you play.
- **Dynamic Gameplay:** Start or restart the game using the "New Game" or "Restart Game" buttons, or by pressing the Enter key.
- **Persistent Home Screen:** The game board is always visible on the home screen with a preview of the snake and food, along with instructions.
- **Moderate Speed:** The snake moves at 50% of the original speed for a more relaxed gaming experience.
- **Responsive Controls:** Use arrow keys to control the direction of the snake.

## How to Play
1. **Starting the Game:**
   - Click the **New Game** button or press the **Enter** key to start.
   - After a game over, click the **Restart Game** button or press **Enter** to play again.
2. **Controls:**
   - Use the **Arrow Keys** (Up, Down, Left, Right) to move the snake.
3. **Objective:**
   - Eat the yellow food squares to grow your snake and increase your score.
   - Avoid hitting the game boundaries or the snake's own body to prevent a game over.

## Setup & Usage
1. **Download or Clone the Repository:**
   - Download the project files or clone the repository using `git clone`.
2. **Launch the Game:**
   - Open the `index.html` file in your web browser.
3. **Play:**
   - The game will display on the home screen. Use the provided buttons or press Enter to start playing.

## File Structure
- **index.html:** Contains the HTML structure and canvas element for the game.
- **style.css:** Contains the styling rules for the game interface.
- **script.js:** Contains the game logic, including snake movement, collision detection, score updates, and dynamic button functionality.

## Customization
- **Speed Adjustment:** The game speed is controlled in `script.js` by the interval set with `setInterval(update, 1000 / 5)`. Adjust this value if you wish to change the speed.
- **Board Dimensions:** Modify `total_row` and `total_col` in `script.js` to change the game board's size.
- **Styling:** Update `style.css` to further customize the appearance of your game.

