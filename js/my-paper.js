// var myPath = new Path({
//   segments: [[220,250], [230,500]],
//   strokeColor: "black"
// });

var myPath = new Path({
  segments: [[220,250], [230,500], [300, 400]],
  strokeColor: "black"
});

myPath.closed = true;

function onFrame(event){
  myPath.rotate(2);
}

// var circle = new Path.Circle({
//   center: [200,200],
//   radius: 40,
//   strokeColor: "black",
//   strokeWidth: 5
// });
