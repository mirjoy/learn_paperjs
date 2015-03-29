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
Paper.js has a lot of built in geometrical objects. Let's start off with some simple lines.

The canvas is basically a grid of 1000 x 1000 points, and for each shape you are going to tell it where to start off on that grid on the x and y axes.

Paper.js let's you build your own shapes through their Path object.
Here's an example.

```
var myPath = new Path({
  segments: [[10,10], [100,500]],
  strokeColor: "black"
});
```
It's a pretty nice line, but not super exciting. Let's add a few more points to it.

```
var myPath = new Path({
  segments: [[10,10], [100,500], [200, 300]],
  strokeColor: "black"
});
```

We can close it into a shape with this simple method
myPath.closed = true;

```
var circle = new Path.Circle({
  center: [200,200],
  radius: 40,
  strokeColor: "black",
  strokeWidth: 5
});
```
