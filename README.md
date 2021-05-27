# Abstract Line Drawing

## Intro

Sort of like the splatter paint project we built earlier, you're going to be building a new art tool this afternoon. This one is going to allow the user to paint abstract art with lines.

Here's <a href="https://jolson-examples.glitch.me/scratch-drawing.html" target="_blank_">what you'll be building</a>. Play with it for a bit and get a feel for what it does.

## The Lab

### Step One: Keeping track of previous mouse position.

When the user clicks, we would like to draw a line from their previous click location to where their mouse is now. In order to do this, we'll need two variables to store their prior `mouseX` and `mouseY`.

Let's call them `prevX` and `prevY`. Define these two variables at the top of your program. Then in `function mousePressed()`, set `prevX` and `prevY` to hold the current mouse position.

### Step Two: Draw a single line.

Before drawing a bunch of random lines, we should try just drawing one line from the previous mouse position to it's current position.

Add a line to `mousePressed`, before the two variable assignments you just wrote, which draws a line from `(prevX, prevY)` to `(mouseX, mouseY)`.

### Step Three: Add some randomness.

This works, but it's not spectactularly interesting. In order to make it more so, add some randomness to the coordinates with which the line is drawn.

The best way to do this is to simply add `+ random(-10, 10)` to each coordinate in your call to the `line` function.

### Step Four: Add more lines.

The art you can create with this program looks much more interesting with more than one line. Try simply copying the line of code that calls `line` another two times.

## Challenges

### Mild
1. Try changing the color of the lines or background.
2. Experiment with amounts of random deviation other than `10`.
3. Change the number of lines drawn each time you click to something larger than `3`.

### Medium
1. Choose a random color for each line, or each set of lines. Can you make the three (or more) lines vary slightly in color from each other?
2. Make the number of lines random, within some reasonable bounds. This should make your piece more dynamic.
3. Try adding other shapes, such as a circle wherever you click. Can you make its diameter vary randomly as well, while keeping it circular.

### Spicy
Part 1:
Instead of taking the actual mouse position into account to place the lines, can you generate a piece of art randomly by simulating the mouse position?

Part 2:
Rewrite some of this code so that it doesn't require user clicks, and instead happens automatically. One way to do this would be to draw a new set of lines each time the `draw` loop runs. You can use `noLoop()` to automatically stop the program running when you feel your work is complete.
