var paper = null;
Raphael(function () {
// Creates canvas 320 × 200 at 10, 50
   paper = Raphael(10, 50, 800, 800);


} );

var g = null;
function drawCircle() {
  if ( g == null ) {
//    g = drawCircleG()
    g = drawRectG()
  }

  g.next();
}

function drawCircleAuto() {
  if ( g == null ) {
//    g = drawCircleG()
    g = drawRectG()
  }

  g.next();
  setTimeout( function () {
    drawCircleAuto();
  }, 500);
}

function* drawCircleG () {
  var x = 50;
  var y = 50;

  for (var i =0; i < 100; i++ ) {
// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(x, y, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");
console.log("aaa!");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");
  x += 100;
    if ( x > 520 ) {
      x = 50;
      y+= 50;
    }

  yield;
  }
}

function* drawRectG () {
  var x = 50;
  var y = 50;

  for (var i =0; i < 100; i++ ) {
    // Creates circle at x = 50, y = 40, with radius 10
    drawCons(x, y);
    drawArrow(x + 30, y + 10, 70);

    x += 100;
    if ( paper.width < x + 100 ) {
      x = 50;
      y+= 50;
    }

    yield;
  }
}

function drawCons(x, y) {
    drawBox(x, y);
    drawBox(x + 20, y);
}

function drawBox(x, y) {
    var rect = paper.rect(x, y, 20, 20);
    // Sets the fill attribute of the circle to red (#f00)
    rect.attr("fill", "#f00");
    console.log("aaa!");

    // Sets the stroke attribute of the circle to white
    rect.attr("stroke", "#fff");
}

function drawArrow(x, y, length) {
  path = paper.preparePath();
  var right = x + length;
  path.moveTo(x, y)
    .lineTo(right, y)
    .lineTo(right - 5, y - 5)
    .lineTo(right, y)
    .lineTo(right - 5, y + 5)
    .lineTo(right, y)
    .close();

  // Draws the path
  //path.draw();
  elm = paper.path(path.toString());
  elm.attr("stroke", "#fff");
}

function drawArrow2(x, y, destX, destY) {
  var mat = mat3.create();
}