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
  strokeColor: "black"
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

How about faster?

```
function onFrame(event){
  myPath.rotate(20);
}

```
Okay, that might be a little crazy.

Let's add some color to it.
