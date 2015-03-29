# Getting Started with Paper.js

It's pretty easy to get it set up. You just need three things:
  * The javascript file off of Paper.js
  * Your own javascript file for making magic
  * An html file that contains a Paper.js 'canvas' tag

The script tag for your javascript file will be slightly different than a normal JS file. The type is going to be 'paperscript' instead of javascript, and it needs to target the canvas id.

```
<script type="text/paperscript" canvas="drawing" src="js/my-paper.js"></script>
```
The canvas tells your browser how large a space to take up. For today's purposes, I'm making it very large.

```
<canvas id="drawing" style="width:1000px; height: 1000px"></canvas>
```
Let's start off with some simple lines.

The canvas is basically a grid of 1000 x 1000 points. When making your own shape, you tell the shape where to sit on that grid, with the segments method, by passing in the points.

You build your shapes through the Path class.
Here's an example of how to make a line.

```
var myPath = new Path({
  segments: [[220,250], [230,500]],
  strokeColor: "black"
});

```
It's a pretty nice line, but not super exciting. Let's add a few more points to it.

```
var myPath = new Path({
  segments: [[220,250], [230,500], [300, 400]],
  strokeColor: "black",
  fillColor: "purple"
});
```

We can close it into a shape with this simple method
myPath.closed = true;

Sweet triangle, but it's not very fun. Let's add some animation.

```
function onFrame(event){
  myPath.rotate(2);
}

```

Let's change the color as it rotates:

```
function onFrame(event){
  myPath.rotate(2);
  myPath.fillColor.hue += 1;
}

```

How about 50 triangles? We can randomly place them across the screen and dynamically change their size using the Symbol class.

To create a symbol from any item (an item is a line or shape or just about anything in Paper.js), just pass the item to the new Symbol constructor. When you create a symbol using an item, that item is automatically removed from the document.

To place instances of the symbol in your project, you can call symbol.place(position) on it, with the position where you want to place it.

[You can read more on working with Paper.js symbols.](http://paperjs.org/tutorials/project-items/working-with-symbols/)
```
var count = 50;

var symbol = new Symbol(myPath);

for (var i = 0; i < count; i++) {
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

```
So the above does the following
  * we specify we want 50 triangles
  * turn myPath into a Symbol (which removes the original triangle from the page)
  * randomly place each triangle using the symbol.place() method
  * randomly size the triangles using the scale method

Now we can animate all the triangles at once! Comments are left in the code to explain what is going on line by line, since this part gets tricky.

```
// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];

		// Move the item 1/20th of its width to the right. This way
		// larger circles move faster than smaller circles:
    // item.fillColor.hue += 1;
		item.position.x += item.bounds.width / 15;
    item.rotate(2);
    // Change the color of all the triangles?
    myPath.fillColor.hue += 0.02;
    // If the item has left the view on the right, move it back
		// to the left:
		if (item.bounds.left > view.size.width) {
			item.position.x = -item.bounds.width;
		}
	}
}
```

Okay, that's fun.
