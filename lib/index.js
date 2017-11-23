const Grid = require('../lib/Grid')
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const grid = new Grid(canvas, ctx)

grid.build();
grid.draw();




