// var myPath = new Path({
//   segments: [[220,250], [230,500]],
//   strokeColor: "black"
// });

var myPath = new Path({
  segments: [[220,250], [230,500], [300, 400]],
  strokeColor: "black",
  fillColor: "purple"
});

myPath.closed = true;

// function onFrame(event){
//   myPath.rotate(2);
//   myPath.fillColor.hue += 1;
// }

var count = 50;

var symbol = new Symbol(myPath);

for (var i = 0; i < count; i++) {
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

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
