class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.getRandomColor = this.getRandomColor.bind(this)
  }

  draw(context) {
    context.beginPath();
    context.rect(this.x * 10, this.y * 10, 9, 9)
    context.fillStyle = this.getRandomColor()
    context.fill();
    context.closePath();
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

module.exports = Cell;