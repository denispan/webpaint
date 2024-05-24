import Tool from './Tool';

export default class Circle extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
    this.type = "Circle";
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseDownHandler(e) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.centerX = e.pageX - e.target.offsetLeft;
    this.centerY = e.pageY - e.target.offsetTop;
    this.saved = this.canvas.toDataURL()

  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.centerX;
      let height = currentY - this.centerY;
      let r = Math.sqrt(width ** 2 + height ** 2)
      this.draw(this.centerX, this.centerY, r);
    }
  }

  mouseUpHandler(e) {
    this.mouseDown = false;
  }

  draw(x, y, r) {
    const image = new Image();
    image.src = this.saved;
    image.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}
