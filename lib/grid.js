const Cell = require('../lib/Cell');

class Grid {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.cells = []
    this.build = this.build.bind(this)
  }

  build() {
    for (let r = 0; r < 45; r++) {
      this.cells[r] = []
      for (let c = 0; c < 80; c++) {
        this.cells[r][c] = new Cell(c, r)
      }
    }
  }

  draw() {
    for (var row of this.cells) {
      for (var cell of row) {
        cell.draw(this.context)
      }
    }
  }
}

module.exports = Grid;