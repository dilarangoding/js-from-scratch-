class Shape {
  paint() {
    console.log("Paint Shape");
  }

  painting() {
    console.log("Painting");
  }
}

class Circle extends Shape {
  paint() {
    super.painting();
    console.log("Paint Circle");
  }
}

const circle = new Circle();
circle.paint();
